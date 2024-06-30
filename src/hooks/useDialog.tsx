import { useContext } from "react";
import { LayerContainerContext } from "@/components/LayerContainer";

export const useDialog = () => {
  const value = useContext(LayerContainerContext);

  if (value === null) {
    throw new Error("Cannot find LayerContainerContext");
  }

  return {
    dialogs: value.dialogs,
    openDialog: value.openDialog,
    closeDialog: value.closeDialog,
  };
};
