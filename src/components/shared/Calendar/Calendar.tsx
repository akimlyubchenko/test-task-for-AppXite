import React, { FunctionComponent, useState } from "react";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

type CalendarProps = {
  onChange: (value: Dayjs) => void;
  initDate?: Dayjs;
};

export const Calendar: FunctionComponent<CalendarProps> = ({
  initDate,
  onChange
}: CalendarProps) => {
  const [value, setValue] = useState<Dayjs>(initDate);

  const onChangeWrapper = (value: Dayjs) => {
    setValue(value);
    onChange(value);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={onChangeWrapper}
      />
    </LocalizationProvider>
  );
};
