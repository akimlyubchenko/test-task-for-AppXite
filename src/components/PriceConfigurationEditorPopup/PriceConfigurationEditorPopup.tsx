import React from "react";
import Dialog from "@mui/material/Dialog";
import { useRecoilValue } from "recoil";
import { activePriceConfigurationState, popupState } from "../../store";
import { UpdatePriceConfigurationContainer } from "../UpdatePriceConfigurationContainer";
import { useHandlePriceConfigurationPopup } from "../../hooks";

export const PriceConfigurationEditorPopup = () => {
  const isOpen = useRecoilValue(popupState);
  const { closePopup } = useHandlePriceConfigurationPopup();
  const activeConfiguration = useRecoilValue(activePriceConfigurationState);

  return (
    <Dialog open={isOpen} onClose={closePopup}>
      <UpdatePriceConfigurationContainer
        activeConfiguration={activeConfiguration}
      />
    </Dialog>
  );
};
