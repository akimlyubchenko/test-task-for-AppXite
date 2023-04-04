import './CreateNewBtn.scss';
import React from "react";
import { useSetRecoilState } from "recoil";
import { Button } from "@mui/material";
import { popupState } from "../../store";

export const CreateNewBtn = () => {
  const setPopupStatus = useSetRecoilState(popupState);
  const openPopup = () => setPopupStatus(true);

  return (
    <Button className="create-new-btn" variant="outlined" onClick={openPopup}>
      Create new
    </Button>
  );
};
