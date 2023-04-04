import { atom } from "recoil";
import { PriceConfiguration } from "../../types/PriceConfiguration";

export const activePriceConfigurationState = atom<PriceConfiguration>({
  key: "activePriceConfigurationState",
  default: {},
});
