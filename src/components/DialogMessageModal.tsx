import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";


const DialogMessageModal = ({open, data, handleSubmitButtonModal, handleCloseModal}: any) => {
  const [userSurveyContent, setUserSurveyContent] = useState(data?.userSurveyContent);

  return (
    <Dialog open={open} onOpenChange={handleCloseModal}>
      <DialogContent>
        <DialogTitle>{userSurveyContent?.data.userProfileTitleModal}</DialogTitle>
        <DialogDescription>
          <Label>{userSurveyContent?.data.userProfileInfoModalDescription}</Label>
        </DialogDescription>
        <DialogFooter>
          <Button onClick={handleSubmitButtonModal}>Edit Info</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );  
};

export default DialogMessageModal;
