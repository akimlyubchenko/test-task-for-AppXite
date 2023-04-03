import React from "react";

export const Row = ({ rowDetails }) => {
  const handleUpdate = () => {
    // call method from hook that opens popup with the payload
  }

  return (
    <div>
      <span>Icon</span>
      <p>{rowDetails.country}</p>
      <span>{rowDetails.currency}</span>
      <span>{rowDetails.acctivationDate}</span>

      <button>Update</button>
      <button onClick={handleUpdate}>Remove</button>
    </div>
  );
};
