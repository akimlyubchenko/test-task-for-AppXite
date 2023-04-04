import React, { ReactElement } from "react";

import SearchIcon from "@mui/icons-material/Search";

export const configurationFields: {
  name: string;
  placeholder: string;
  type?: 'number' | 'text';
  icon?: ReactElement;
}[] = [
  {
    name: "currency",
    placeholder: "Currency",
    icon: <SearchIcon fontSize="small" />,
  },
  {
    name: "country",
    placeholder: "Country",
    icon: <SearchIcon fontSize="small" />,
  },
  {
    name: "quantity",
    placeholder: "Quantity",
    type: 'number',
  },
  {
    name: "customer",
    placeholder: "Customer",
    icon: <SearchIcon fontSize="small" />,
  },
  {
    name: "industry",
    placeholder: "Industry",
    icon: <SearchIcon fontSize="small" />,
  },
];
