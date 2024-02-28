import { TParamCandleHistory } from "../types";

export const getCandleHistory = ({
  limit = 35,
  interval = "1m",
  symbol,
}: TParamCandleHistory) => {
  return fetch(
    `https://www.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`
  )
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { getCandleHistory };
