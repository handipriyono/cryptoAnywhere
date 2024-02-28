import { useEffect, useState } from "react";
const dummyOrderBookList = {
  symbol: "BTCUSDT",
  bid: [
    { price: 2555, size: 6330 },
    { price: 2542, size: 105 },
    { price: 2537, size: 6180 },
    { price: 2519, size: 95 },
    { price: 2516, size: 110 },
    { price: 2503, size: 8 },
    { price: 2507, size: 870 },
    { price: 2501, size: 20 },
    { price: 2500, size: 33 },
    { price: 2499, size: 888 },
    { price: 2485, size: 19 },
    { price: 2482, size: 38 },
    { price: 2478, size: 51 },
    { price: 2475, size: 13 },
    { price: 2466, size: 22 },
  ],
  ask: [
    { price: 2565, size: 256 },
    { price: 2573, size: 618 },
    { price: 2588, size: 700 },
    { price: 2596, size: 1290 },
    { price: 2603, size: 782 },
    { price: 2612, size: 4375 },
    { price: 2562, size: 250 },
    { price: 2576, size: 620 },
    { price: 2585, size: 710 },
    { price: 2593, size: 1300 },
    { price: 2607, size: 790 },
    { price: 2615, size: 4385 },
    { price: 2568, size: 252 },
    { price: 2579, size: 628 },
    { price: 2583, size: 712 },
  ],
};

const useGetDetailOrderBook = () => {
  //TODO: replace dummy orderbook with real data
  return {
    orderBookList: dummyOrderBookList,
  };
};

export default useGetDetailOrderBook;
