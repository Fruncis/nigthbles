// components/ReusableDialog.tsx

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

interface ReusableDialogProps {
  /*open: boolean;
  setOpen: (open: boolean) => void;*/
  triggerLabel: string;
  title: string;
  children: React.ReactNode;
  style: string;
}

export function ReusableDialog({triggerLabel, title, children, style }: ReusableDialogProps) {
  const [open, setOpen] =  useState(false);

  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={style}>
        {triggerLabel}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
