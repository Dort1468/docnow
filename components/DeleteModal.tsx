"use client";

import Image from "next/image";
import { useState } from "react";

import { deleteDocument } from "@/lib/actions/room.action";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";

export const DeleteModal = ({ roomId }: DeleteModalProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const deleteDocumentHandler = async () => {
    setLoading(true);

    try {
      await deleteDocument(roomId);
      setOpen(false);
    } catch (error) {
      console.log("錯誤訊息:", error);
    }

    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="min-w-9 rounded-xl bg-transparent p-2 transition-all">
          <Image
            src="/assets/icons/delete.svg"
            alt="delete"
            width={20}
            height={20}
            className="mt-1"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog">
        <DialogHeader>
          <Image
            src="/assets/icons/delete-modal.svg"
            alt="delete"
            width={48}
            height={48}
            className="mb-4"
          />
          <DialogTitle>刪除文件</DialogTitle>
          <DialogDescription>
            你確定要刪除此文件嗎，此動作不可復原
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-5">
          <DialogClose asChild className="w-full bg-dark-400 text-white">
            取消
          </DialogClose>

          <Button
            variant="destructive"
            onClick={deleteDocumentHandler}
            className="gradient-red w-full"
          >
            {loading ? "刪除中..." : "刪除"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
