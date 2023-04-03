import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { useChangeConfiguration } from "../../hooks";
import { popupState } from "../../store";

export const UpdatePriceConfiguration = ({ activeConfiguration }) => {
  const setPopupStatus = useSetRecoilState(popupState);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      industry: activeConfiguration?.industry,
      customer: activeConfiguration?.customer,
      country: activeConfiguration?.country,
      currency: activeConfiguration?.currency,
      activationDate: activeConfiguration?.activationDate,
      id: activeConfiguration?.id,
    },
  });

  const { updateConfiguration, saveConfiguration } = useChangeConfiguration();

  const handleConfigurationSubmit = (payload) => {
    payload.id ? updateConfiguration(payload) : saveConfiguration(payload);

    setPopupStatus(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((details) => handleConfigurationSubmit(details))}
      >
        <input {...register("industry")} placeholder="industry" />
        <input {...register("customer")} placeholder="customer" />
        <input {...register("country")} placeholder="country" />
        <input {...register("currency")} placeholder="currency" />
        <input {...register("activationDate")} placeholder="activationDate" />

        <input type="submit" />
      </form>
    </>
  );
};
