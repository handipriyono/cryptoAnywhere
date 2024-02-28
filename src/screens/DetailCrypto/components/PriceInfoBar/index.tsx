import { View, Text } from "react-native";
import { CandlestickChart } from "react-native-wagmi-charts";
import useGetPrice from "../../hooks/useGetPrice";
import { TRowPriceInfo } from "../../types";
import Styles from "./style";

const RowPriceItem = ({ title, type }: TRowPriceInfo) => {
  return (
    <View style={Styles.rowBar}>
      <Text style={Styles.titleRow}>{title}</Text>
      <CandlestickChart.PriceText type={type} style={{ fontSize: 13 }} />
    </View>
  );
};

const SelectedBar = () => {
  return (
    <View style={Styles.priceSelectedWrapper}>
      <CandlestickChart.DatetimeText style={Styles.dateBarText} />
      <View style={[Styles.rowBar, Styles.closeOpenSection]}>
        <View style={Styles.closeOpenInnerWrapper}>
          <RowPriceItem title={"Open"} type="open" />
          <RowPriceItem title={"Close"} type="close" />
        </View>

        <View style={{ flex: 1 }}>
          <RowPriceItem title={"Hight"} type="high" />
          <RowPriceItem title={"Low"} type="low" />
        </View>
      </View>
    </View>
  );
};

const PriceInfoBar = ({ isShowDetail }: { isShowDetail: boolean }) => {
  const { lastPrice, selectedSymbol } = useGetPrice();

  return !isShowDetail ? (
    <>
      <View style={Styles.priceWrapper}>
        <Text style={[Styles.title]}>{selectedSymbol} Price</Text>
        <Text style={Styles.price}>{lastPrice}</Text>
      </View>
    </>
  ) : (
    <SelectedBar />
  );
};

export default PriceInfoBar;
