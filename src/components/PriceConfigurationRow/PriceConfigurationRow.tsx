import "./PriceConfigurationRow.scss";
import React, { FunctionComponent } from "react";
import {
  useChangeConfiguration,
  useHandlePriceConfigurationPopup,
} from "../../hooks";
import { PriceConfiguration } from "../../types/PriceConfiguration";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";

type PriceConfigurationRowProps = {
  rowDetails: PriceConfiguration;
};

export const PriceConfigurationRow: FunctionComponent<
  PriceConfigurationRowProps
> = ({ rowDetails }: PriceConfigurationRowProps) => {
  const { openPopup } = useHandlePriceConfigurationPopup();
  const { removeConfiguration } = useChangeConfiguration();

  const handleUpdate = () => {
    openPopup(rowDetails);
  };

  const handleRemove = () => {
    removeConfiguration(rowDetails.id);
  };

  return (
    <div className="configuration-row">
      <div className="configuration-row__info">
        <HomeIcon fontSize="small" htmlColor="gray" />
        <span>{rowDetails.country}</span>-
        <span>{rowDetails.currency}</span>-
        <span>{rowDetails.activationDate}</span>
      </div>

      <Button variant="outlined" onClick={handleUpdate}>
        Update
      </Button>
      <Button variant="outlined" onClick={handleRemove}>
        Remove
      </Button>
    </div>
  );
};
