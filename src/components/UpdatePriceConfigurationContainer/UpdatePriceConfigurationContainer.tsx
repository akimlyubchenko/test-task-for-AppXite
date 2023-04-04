import "./UpdatePriceConfigurationContainer.scss";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, InputAdornment } from "@mui/material";
import {
  useChangeConfiguration,
  useHandlePriceConfigurationPopup,
} from "../../hooks";
import { DateCalendar, InputFields } from "../priceConfigurationFields";
import { PriceConfiguration } from "../../types/PriceConfiguration";
import { getCurrentDate } from "../../utils";

type UpdatePriceConfigurationContainerProps = {
  activeConfiguration: PriceConfiguration;
};

export const UpdatePriceConfigurationContainer = ({
  activeConfiguration,
}: UpdatePriceConfigurationContainerProps) => {
  const { closePopup } = useHandlePriceConfigurationPopup();
  const { updateConfiguration, saveConfiguration } = useChangeConfiguration();
  const { register, handleSubmit, setValue } = useForm<PriceConfiguration>({
    defaultValues: {
      ...activeConfiguration,
      activationDate: activeConfiguration?.activationDate ?? getCurrentDate(),
    },
  });

  useEffect(() => {
    register("activationDate", { required: true });
  }, [register]);

  const handleConfigurationSubmit = (payload: PriceConfiguration) => {
    payload.id ? updateConfiguration(payload) : saveConfiguration(payload);

    closePopup();
  };

  return (
    <>
      <form
        className="confifuration-form"
        onSubmit={handleSubmit((details: PriceConfiguration) =>
          handleConfigurationSubmit(details)
        )}
      >
        <DateCalendar
          initDate={activeConfiguration.activationDate}
          onChange={(value) =>
            setValue("activationDate", value, { shouldValidate: true })
          }
        />

          <InputFields formRegister={register} />

        <Button variant="outlined" type="submit">
          Save
        </Button>
      </form>
    </>
  );
};
