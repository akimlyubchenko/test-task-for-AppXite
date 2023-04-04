import "./PriceConfigurationsContainer.scss";
import React, { FunctionComponent, useEffect } from "react";
import { useRecoilState } from "recoil";
import { getPrices } from "../../api/index";
import { priceConfigugationList } from "../../store";
import { PriceConfigurationRow } from "../PriceConfigurationRow";

export const PriceConfigurationsContainer: FunctionComponent = () => {
  const [priceConfigurations, setPriceConfigurations] = useRecoilState(
    priceConfigugationList
  );

  const initPriceConfigurations = async () => {
    const prices = await getPrices();

    setPriceConfigurations(prices);
  };

  useEffect(() => {
    initPriceConfigurations();
  }, []);

  return (
    <div className="configuration-container">
      {priceConfigurations.map((rowDetails) => (
        <PriceConfigurationRow key={rowDetails.id} rowDetails={rowDetails} />
      ))}
    </div>
  );
};
