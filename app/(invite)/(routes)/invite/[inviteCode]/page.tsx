import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

interface InvitePageCodePageProps {
  params: {
    inviteCode: string;
  };
}

export const InviteCodePage = async ({ params }: InvitePageCodePageProps) => {
  //fetch profile
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/sign-in");
  }

  if (!params.inviteCode) {
    return redirect("/");
  }

  //if already in server
  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: params.inviteCode,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (existingServer) {
    return redirect(`/servers/${existingServer.id}`);
  }

  //joining if new
  const server = await db.server.update({
    where: {
      inviteCode: params.inviteCode,
    },
    data: {
      members: {
        create: [
          {
            profileId: profile.id,
          },
        ],
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return null;
};

export default InviteCodePage;