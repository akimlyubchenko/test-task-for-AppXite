import React from "react";
import { useSetRecoilState } from "recoil";
import { priceConfigugationList } from "../store";

export const useUpdateConfiguration = () => {
  const setPriceConfiguraionList = useSetRecoilState(priceConfigugationList);

  const updateConfiguration = (payload) => {
    setPriceConfiguraionList((prev) =>
      prev.map((priceDetails) =>
        priceDetails.id === payload.id ? payload : priceDetails
      )
    );
  };

  return updateConfiguration;
};
