export type TParamCandleHistory = {
  limit?: number;
  interval?: string;
  symbol: string;
};

export type TCandleStickChartComponent = {
  showPrice: boolean;
  data: any;
  onSetShowPrice: (x: any) => void;
};

export type TRowItemOrderBook = {
  values: any[];
  textStyle?: any;
  itemKey: "price" | "size";
};

export type TRowPriceInfo = {
  title: string;
  type: "open" | "close" | "high" | "low";
};

export type TKlineItem = {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
};
