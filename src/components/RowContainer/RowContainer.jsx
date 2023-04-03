import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getPrices } from "../../api";

import { priceConfigugationList } from "../../store";

import { Row } from "../Row";

export const RowContainer = () => {
  const [priceConfigurations, setPriceConfigurations] = useRecoilState(
    priceConfigugationList
  );

  const initPriceConfigurations = async () => {
    const prices = await getPrices();

    setPriceConfigurations(prices);
  };

  useEffect(() => { initPriceConfigurations() }, []);

  return (
    <>
      {priceConfigurations.map((rowDetails) => (
        <div key={rowDetails.id}>
          <Row rowDetails={rowDetails} />
          <br />
          <br />
        </div>
      ))}
    </>
  );
};
