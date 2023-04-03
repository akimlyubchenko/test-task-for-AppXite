import React from "react";
import { Popup as NugetPopup } from "reactjs-popup";
import { useRecoilState } from "recoil";
import { popupState } from "../../store";
import { PriceConfigurationEditorPopup } from "../ConfigurationEditorPopup";

export const Popup = () => {
  const [isOpen, setIsOpen] = useRecoilState(popupState);

  return (
    <NugetPopup open={isOpen} onClose={() => setIsOpen(false)} position="center">
      <PriceConfigurationEditorPopup />
    </NugetPopup>
  );
};
