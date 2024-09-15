"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-model-store";
import { ServerWithMembersWithProfile } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserAvatar } from "@/components/user-avatar";
import { ShieldAlert, ShieldCheck } from "lucide-react";
import { useState } from "react";


const roleIconMap = {
  "GUEST": null,
  "MODERATOR": <ShieldCheck className="w-4 h-4 ml-2 text-indigo-500" />,
  "ADMIN": <ShieldAlert className="w-4 h-4 ml-2 text-rose-500" />,
};

export const MembersModal = () => {
  const { onOpen, isOpen, onClose, type, data } = useModal();
  //const [loadingId, setLoadingId] = useState("");

  const isModalOpen = isOpen && type === "members";
  const { server } = data as { server: ServerWithMembersWithProfile };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Manage Members
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            {server?.members?.length} Members
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="mt-8 max-h-[420px] pr-6">
          {server?.members?.map((member) => (
            <div key={member.id} className="flex items-center gap-x-2 mb-6">
              <UserAvatar src={member.profile.imageUrl} />
              <div className="flex flex-col gap-y-1">
                <div className="text-xs font-semibold flex items-center">
                  {member.profile.name}
                  {roleIconMap[member.role]}
                </div>
                <p className="text-xs text-zinc-500">
                  {member.profile.email}
                </p>
              </div>
              {/* {server.profileId !== member.profileId && loadingId !== member.id && (
                <div className="ml-auto">
                  Actions!
                </div>
              )} */}
            </div>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
