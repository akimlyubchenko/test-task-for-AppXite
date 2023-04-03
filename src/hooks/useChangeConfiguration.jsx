import React from "react";
import { useSetRecoilState } from "recoil";
import { uid } from "uid";
import { priceConfigugationList } from "../store";

export const useChangeConfiguration = () => {
  const setPriceConfiguraionList = useSetRecoilState(priceConfigugationList);

  const updateConfiguration = (payload) => {
    setPriceConfiguraionList((prev) =>
      prev.map((priceDetails) =>
        priceDetails.id === payload.id ? payload : priceDetails
      )
    );
  };

  const saveConfiguration = (payload) => {
    setPriceConfiguraionList((prev) => [
      ...prev,
      {
        ...payload,
        id: uid(),
      },
    ]);
  };

  const removeConfiguration = (id) => {
    setPriceConfiguraionList((prev) => prev.filter(conf => conf.id !== id));
  };

  return {updateConfiguration, saveConfiguration, removeConfiguration};
};
