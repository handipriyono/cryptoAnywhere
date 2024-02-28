import { create } from "zustand";

type TCryptoDetail = {
  selectedSymbol: string;
  lastPrice: any;
  timeRangeSelected: string;
  setSelectedSymbol: (symbol: string) => void;
  setLastPrice: (price: any) => void;
  setTimeRangeSelected: (time: string) => void;
  onReset: () => void;
};

const useGetCryptoDetail = create<TCryptoDetail>((set) => ({
  selectedSymbol: "BTCUSDT",
  lastPrice: {},
  timeRangeSelected: "1m",
  setTimeRangeSelected: (time: string) => set({ timeRangeSelected: time }),
  setSelectedSymbol: (symbol: string) => set({ selectedSymbol: symbol }),
  setLastPrice: (price: any) => set({ lastPrice: price }),
  onReset: () =>
    set({ selectedSymbol: "BTCUSDT", lastPrice: {}, timeRangeSelected: "1m" }),
}));

export default useGetCryptoDetail;
