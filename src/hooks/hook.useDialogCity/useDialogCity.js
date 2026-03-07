import { useState } from "react";

const useDialogCity = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  
  const handleOpenChange = () => setOpen(!open);

  return { open, setOpen, handleClickOpen, handleClose,handleOpenChange };
};

export default useDialogCity;
