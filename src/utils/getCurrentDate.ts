import dayjs from "dayjs";
import { dateTimeSettings } from "../constants";

export const getCurrentDate = () =>
  dayjs(Date.now()).format(dateTimeSettings.format);
