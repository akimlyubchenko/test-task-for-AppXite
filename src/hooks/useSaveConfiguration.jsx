import React from "react";
import { useSetRecoilState } from "recoil";
import { priceConfigugationList } from "../store";
import { uid } from "uid";

export const useSaveConfiguration = () => {
  const setPriceConfiguraionList = useSetRecoilState(priceConfigugationList);

  const saveConfiguration = (payload) => {
    setPriceConfiguraionList((prev) => [
      ...prev,
      {
        ...payload,
        id: uid(),
      },
    ]);
  };

  return saveConfiguration;
};
