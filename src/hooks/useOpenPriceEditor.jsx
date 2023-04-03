import { useSetRecoilState } from "recoil";
import { activePriceConfigurationState, popupState } from "../store";

export const useOpenPriceEditor = () => {
  const setPopupStatus = useSetRecoilState(popupState);
  const setActivePriceConfigurationState = useSetRecoilState(
    activePriceConfigurationState
  );

  const openPriceEditor = (payload) => {
    setActivePriceConfigurationState(payload);
    setPopupStatus(true);
  };

  return openPriceEditor;
};
