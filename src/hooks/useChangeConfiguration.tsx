import { useSetRecoilState } from "recoil";
import { uid } from "uid";
import { priceConfigugationList } from "../store";
import { PriceConfiguration } from "../types/PriceConfiguration";

export const useChangeConfiguration = () => {
  const setPriceConfiguraionList = useSetRecoilState(priceConfigugationList);

  const updateConfiguration = (payload: PriceConfiguration) => {
    setPriceConfiguraionList((prev) =>
      prev.map((priceDetails) =>
        priceDetails.id === payload.id ? payload : priceDetails
      )
    );
  };

  const saveConfiguration = (payload: PriceConfiguration) => {
    setPriceConfiguraionList((prev) => [
      ...prev,
      {
        ...payload,
        id: uid(),
      },
    ]);
  };

  const removeConfiguration = (id: string) => {
    setPriceConfiguraionList((prev) => prev.filter((conf) => conf.id !== id));
  };

  return { updateConfiguration, saveConfiguration, removeConfiguration };
};
