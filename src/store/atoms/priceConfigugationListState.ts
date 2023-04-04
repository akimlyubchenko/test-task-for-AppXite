import { atom } from "recoil";
import { PriceConfiguration } from "../../types/PriceConfiguration";

export const priceConfigugationList = atom<PriceConfiguration[]>({
  key: "priceConfigugationListState",
  default: [],
});
