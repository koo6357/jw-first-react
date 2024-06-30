import { createContext, useState } from "react";
import Dialog from "@/ui/Dialog";

export interface DialogProps {
  title: string;
  content: string;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
}

interface LayerContainerContextType {
  dialogs: DialogProps[];
  openDialog: (props: DialogProps) => void;
  closeDialog: () => void;
}

export const LayerContainerContext =
  createContext<LayerContainerContextType | null>(null);

const LayerContainer = ({ children }: { children: React.ReactNode }) => {
  const [dialogs, setDialogs] = useState<DialogProps[]>([]);
  const openDialog = (dialog: DialogProps) => {
    setDialogs([...dialogs, dialog]);
  };

  const closeDialog = () => {
    setDialogs((dialogs) => {
      const nextDialog = [...dialogs];
      nextDialog.pop();
      return nextDialog;
    });
  };

  return (
    <LayerContainerContext.Provider
      value={{
        dialogs,
        openDialog,
        closeDialog,
      }}
    >
      {dialogs.map((dialogProps) => (
        <Dialog closeDialog={closeDialog} {...dialogProps} title={"hi"} />
      ))}

      {children}
    </LayerContainerContext.Provider>
  );
};

export default LayerContainer;
