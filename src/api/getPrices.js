import { uid } from "uid";

export const getPrices = () => {
  let priceConfigurations = [
    {
      country: "Poland",
      industry: "education",
      customer: "She",
      currency: "EUR",
      activationDate: new Date().toLocaleDateString(),
      quantity: 1,
    },
    {
      country: "Latvia",
      industry: "Market",
      customer: "He",
      currency: "USD",
      activationDate: new Date().toLocaleDateString(),
      quantity: 2,
    },
  ];

  priceConfigurations = priceConfigurations.map((el) => ({ ...el, id: uid() }));

  return Promise.resolve(priceConfigurations);
};
