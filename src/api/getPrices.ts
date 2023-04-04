import dayjs from "dayjs";
import { uid } from "uid";
import { dateTimeSettings } from "../constants";
import { PriceConfiguration } from "../types/PriceConfiguration";

export const getPrices = (): Promise<PriceConfiguration[]> => {
  let priceConfigurations: Partial<PriceConfiguration>[] = [
    {
      country: "Poland",
      industry: "education",
      customer: "She",
      currency: "EUR",
      quantity: 1,
    },
    {
      country: "Latvia",
      industry: "Market",
      customer: "He",
      currency: "USD",
      quantity: 2,
    },
  ];

  priceConfigurations = priceConfigurations.map((el) => ({
    ...el,
    id: uid(),
    activationDate: dayjs().format(dateTimeSettings.format),
  }));

  return Promise.resolve(priceConfigurations);
};
