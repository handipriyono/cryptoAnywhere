import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CandlestickChart } from "react-native-wagmi-charts";
import PriceInfoBar from "../PriceInfoBar";
import { View, Text, TouchableOpacity } from "react-native";
import * as haptics from "expo-haptics";
import { TCandleStickChartComponent } from "../../types";
import BarTime from "../BarTime";
import Styles from "./style";

const CandleStickChart = ({
  showPrice,
  data,
  onSetShowPrice,
}: TCandleStickChartComponent) => {
  function invokeHaptic(x: any) {
    haptics.impactAsync(haptics.ImpactFeedbackStyle.Light);
  }

  return (
    <GestureHandlerRootView style={{ position: "relative" }}>
      <View>
        <CandlestickChart.Provider data={data}>
          <PriceInfoBar isShowDetail={showPrice} />
          <CandlestickChart height={280} style={{ marginTop: 15 }}>
            <CandlestickChart.Candles />
            <CandlestickChart.Crosshair
              onActivated={(x) => onSetShowPrice(true)}
              onEnded={(x) => onSetShowPrice(false)}
              onCurrentXChange={invokeHaptic}
            >
              <View style={{ backgroundColor: "transparent" }}>
                <CandlestickChart.Tooltip
                  style={{ padding: 0 }}
                  textStyle={Styles.hover}
                />
              </View>
            </CandlestickChart.Crosshair>
          </CandlestickChart>
        </CandlestickChart.Provider>
      </View>
      <BarTime />
    </GestureHandlerRootView>
  );
};

export default CandleStickChart;
