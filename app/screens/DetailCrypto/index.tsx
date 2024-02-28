import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import CandleStickChart from "./components/CandleChart";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useGetKline from "./hooks/useGetKline";
import { SafeAreaView, ScrollView } from "react-native";
import HeaderBack from "../../commons/components/HeaderBackDetail";
import OrderBook from "./components/OrderBook";
import FooterActionDetail from "./components/FooterAction";

const DetailCrypto = () => {
  const [showPrice, setShowPrice] = useState(false);
  const { data } = useGetKline();

  const onSetShowPrice = (p: boolean) => {
    if (p && showPrice) {
      return;
    }
    setShowPrice(p);
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: 100 }}>
      <HeaderBack />
      <ScrollView showsVerticalScrollIndicator={false}>
        <GestureHandlerRootView style={{ position: "relative" }}>
          <CandleStickChart
            data={data}
            showPrice={showPrice}
            onSetShowPrice={onSetShowPrice}
          />
          <StatusBar style="auto" />
        </GestureHandlerRootView>
        <OrderBook />
      </ScrollView>
      <FooterActionDetail />
    </SafeAreaView>
  );
};

export default DetailCrypto;
