import React from "react";
import { useSetRecoilState } from "recoil";
import { popupState } from "../../store";

export const CreateNewBtn = () => {
  const setPopupStatus = useSetRecoilState(popupState);
  const openPopup = () => setPopupStatus(true);

  return (
    <>
      <button onClick={openPopup}>Create new</button>
    </>
  );
};
