import { Member, Server, Profile } from "@prisma/client"

export type ServerWithMembersWithProfile = Server &{
    members:(Member & {profile:Profile})[];
}