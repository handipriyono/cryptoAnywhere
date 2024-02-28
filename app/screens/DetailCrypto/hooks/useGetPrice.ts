import React, { useEffect, useState } from "react";
import usePriceStore from "../stores";
import { useShallow } from "zustand/react/shallow";

const useGetPrice = () => {
  const { setLastPrice, lastPrice, selectedSymbol } = usePriceStore(
    useShallow((state) => ({
      lastPrice: state.lastPrice,
      setLastPrice: state.setLastPrice,
      selectedSymbol: state.selectedSymbol,
    }))
  );

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${String(
        selectedSymbol
      )?.toLowerCase()}@ticker`
    );
    ws.onopen = () => {
      console.log("onopen");
    };
    ws.onmessage = (e) => {
      const item = JSON.parse(e?.data);
      setLastPrice(item);
    };
    ws.onerror = (e) => {
      console.log("Error", e);
    };

    return () => {
      ws.close();
    };
  }, [selectedSymbol]);

  return {
    lastPrice: Number(lastPrice?.c || 0)?.toFixed(2),
    selectedSymbol: selectedSymbol || "",
  };
};

export default useGetPrice;
