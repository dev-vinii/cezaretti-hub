import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ClientForm } from "./client-form";
import { Separator } from "@/components/ui/separator";
import { DialogDescription } from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface ClientDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

function ClientDialog({ isOpen, onClose }: ClientDialogProps) {
  return (
    <Dialog open={isOpen}>
      <DialogContent
        className="max-w-4xl bg-white"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onPointerDownOutside={() => onClose()}
        onEscapeKeyDown={() => {
          onClose();
        }}
        onInteractOutside={() => onClose()}
      >
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle>Novo Cliente</DialogTitle>
          <X onClick={() => onClose()} />
          <DialogDescription className="hidden" />
        </DialogHeader>
        <Separator className="bg-black" />
        <ClientForm />
      </DialogContent>
    </Dialog>
  );
}

export { ClientDialog };
