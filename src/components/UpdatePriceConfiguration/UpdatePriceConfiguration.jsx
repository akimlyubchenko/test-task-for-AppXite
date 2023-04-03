import React from "react";
import { useForm } from "react-hook-form";
import { useSaveConfiguration, useUpdateConfiguration } from "../../hooks";

export const UpdatePriceConfiguration = ({ activeConfiguration }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      industry: activeConfiguration?.industry,
      customer: activeConfiguration?.customer,
      country: activeConfiguration?.country,
      currency: activeConfiguration?.currency,
      activationDate: activeConfiguration?.activationDate,
    }
  });
  const saveConfiguration = useSaveConfiguration();
  const updateConfiguration = useUpdateConfiguration();

  const handleConfigurationSubmit = (payload) => {
    payload.id
      ? updateConfiguration(payload)
      : saveConfiguration(payload);
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
        {/* <select {...register("category", { required: true })}>
          <option value="">Select...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>
        <p>{configurationDetails}</p> */}
        <input type="submit" />
      </form>
    </>
  );
};
