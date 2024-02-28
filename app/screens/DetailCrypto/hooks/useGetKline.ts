import React, { useEffect, useState } from "react";
import { getCandleHistory } from "../api/index";
import useGetCryptoDetailStore from "../stores";
import { useShallow } from "zustand/react/shallow";
import { TKlineItem } from "../types";

const defaultItem: TKlineItem = {
  timestamp: 0,
  open: 0,
  high: 0,
  low: 0,
  close: 0,
};

const useGetKline = () => {
  const [klineItems, setKlineItems] = useState<Array<TKlineItem>>([]);
  const { selectedSymbol, timeRangeSelected } = useGetCryptoDetailStore(
    useShallow((state) => ({
      selectedSymbol: state.selectedSymbol,
      timeRangeSelected: state.timeRangeSelected,
    }))
  );

  const getHistory = async () => {
    try {
      const dataResult = await getCandleHistory({
        symbol: selectedSymbol,
        limit: 37,
        interval: timeRangeSelected,
      });
      if (!dataResult) {
        throw new Error("Data not found");
      }

      const final = (dataResult || [])?.map((item: any) => {
        return {
          timestamp: item?.[0],
          open: Number(item?.[1]),
          high: Number(item?.[2]),
          low: Number(item?.[3]),
          close: Number(item?.[4]),
        };
      });
      setKlineItems(final || [defaultItem]);
    } catch (error) {
      console.log("error", error);
      setKlineItems([defaultItem]);
    }
  };

  useEffect(() => {
    getHistory();
  }, [timeRangeSelected, selectedSymbol]);

  return {
    data: klineItems,
  };
};

export default useGetKline;
