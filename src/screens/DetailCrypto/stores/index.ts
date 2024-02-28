import { create } from "zustand";

type TCryptoDetail = {
  selectedSymbol: string;
  lastPrice: any;
  setSelectedSymbol: (symbol: string) => void;
  setLastPrice: (price: any) => void;
  onReset: () => void;
};

const useGetCryptoDetail = create<TCryptoDetail>((set) => ({
  selectedSymbol: "BTCUSDT",
  lastPrice: {},
  setSelectedSymbol: (symbol: string) => set({ selectedSymbol: symbol }),
  setLastPrice: (price: any) => set({ lastPrice: price }),
  onReset: () => set({ selectedSymbol: "BTCUSDT", lastPrice: {} }),
}));

export default useGetCryptoDetail;
