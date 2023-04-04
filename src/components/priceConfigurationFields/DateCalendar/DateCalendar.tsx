import "./DateCalendar.scss";
import React, { FunctionComponent } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Calendar } from "../../shared";
import { dateTimeSettings } from "../../../constants";

type DateCalendarProps = {
  onChange: (value: string) => void;
  initDate?: string;
};

export const DateCalendar: FunctionComponent<DateCalendarProps> = ({
  initDate,
  onChange,
}: DateCalendarProps) => {
  const onChangeWrapper = (value: Dayjs) => {
    onChange(value.format(dateTimeSettings.format));
  };

  return (
    <div className="date-picker-filed">
      <Calendar
        initDate={initDate ? dayjs(initDate, dateTimeSettings.format) : dayjs()}
        onChange={onChangeWrapper}
      />
    </div>
  );
};
