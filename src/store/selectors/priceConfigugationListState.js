import { selector } from "recoil";
import { getPrices } from "../../api";

export const priceConfigugationList = selector({
  key: "priceConfigugationListState",
  get: getPrices,
});
