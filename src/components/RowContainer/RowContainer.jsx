import React from "react";
import { useRecoilValue } from "recoil";
import { priceConfigugationList } from "../../store";

import { Row } from "../Row";

export const RowContainer = () => {
  const rows = useRecoilValue(priceConfigugationList);

  return (
    <>
      {rows.map((rowDetails) => (
        <div key={rowDetails.id}>
          <Row rowDetails={rowDetails} />
        </div>
      ))}
    </>
  );
};
