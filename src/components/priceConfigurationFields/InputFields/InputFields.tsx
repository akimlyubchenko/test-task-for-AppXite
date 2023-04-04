import "./InputFields.scss";
import React, { FunctionComponent } from "react";
import { configurationFields } from "./configurationFields";
import { InputAdornment, TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { PriceConfiguration } from "../../../types/PriceConfiguration";

type InputFieldsProps = {
  formRegister: UseFormRegister<PriceConfiguration>;
};

export const InputFields: FunctionComponent<InputFieldsProps> = ({
  formRegister,
}: InputFieldsProps) => {
  return (
    <>
      {configurationFields.map(({ name, placeholder, icon, type }) => (
        <TextField
          key={name}
          className="confifuration-form-field"
          {...formRegister(name as keyof PriceConfiguration)}
          label={placeholder}
          required={true}
          type={type ?? "text"}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{icon}</InputAdornment>
            ),
          }}
        />
      ))}
    </>
  );
};
