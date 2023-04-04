import { useSetRecoilState } from "recoil";
import { activePriceConfigurationState, popupState } from "../store";
import { PriceConfiguration } from "../types/PriceConfiguration";

export const useHandlePriceConfigurationPopup = () => {
  const setPopupState = useSetRecoilState(popupState);
  const setActivePriceConfigurationState = useSetRecoilState(
    activePriceConfigurationState
  );

  const openPopup = (payload: PriceConfiguration) => {
    setPopupState(true);
    setActivePriceConfigurationState(payload);
  };

  const closePopup = () => {
    setPopupState(false);
    setActivePriceConfigurationState({});
  };

  return { openPopup, closePopup };
};
