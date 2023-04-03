import React from "react";
import { useChangeConfiguration, useOpenPriceEditor } from "../../hooks";

export const Row = ({ rowDetails }) => {
  const openEditor = useOpenPriceEditor();
  const { removeConfiguration } = useChangeConfiguration();

  const handleUpdate = () => {
    openEditor(rowDetails);
  };

  const handleRemove = () => {
    removeConfiguration(rowDetails.id)
  }

  return (
    <div>
      <span>Icon</span>
      <p>{rowDetails.country}</p>
      <p>{rowDetails.currency}</p>
      <p>{rowDetails.activationDate}</p>

      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};
