import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { MemberRole } from "@prisma/client";

export async function POST(
    req : Request,

){
    try{
        const profile = await currentProfile();
        const {name , type} = await req.json();
        const { searchParams } = new URL(req.url);

        const serverId = searchParams.get("serverId");

        // Check if the user is authenticated
        if(!profile){
            return new NextResponse("Unauthorized", {status: 401});
        }

        if(!serverId){
            return new NextResponse("Bad Request : Server ID missing", {status: 400});
        }

        // check is user bypass frontend validation and just send a request
        if(name === "general" || name === "announcements"){
            return new NextResponse("Bad Request : Channel name is reserved", {status: 400});
        }

        const server = await db.server.update({
            where : {
                id : serverId,
                members : {
                    some : {
                        profileId : profile.id,
                        role : {
                            in : [MemberRole.ADMIN, MemberRole.MODERATOR]
                        }
                    }
                }
            },
            data : {
                channels : {
                    create : {
                        profileId : profile.id,
                        name,
                        type
                    }
                }
            }
        });

        return NextResponse.json(server);
    }
    catch(error){
        console.error("CHANNELS_POST",error);
        return new NextResponse("Internal Server Error", {status: 500});
    }

}