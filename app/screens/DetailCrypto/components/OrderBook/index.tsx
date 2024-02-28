import { View, Text } from "react-native";
import useGetOrderBook from "../../hooks/useGetDetailOrderBook";
import { TRowItemOrderBook } from "../../types";
import Styles from "./style";

const RowItem = ({ values, textStyle, itemKey }: TRowItemOrderBook) => {
  return values?.map((item: any, idx: number) => (
    <View key={`${item?.price}-${item.size}`} style={Styles.rowWrapper}>
      <Text style={[Styles.valueText, textStyle]}>{item?.[itemKey]}</Text>
    </View>
  ));
};

const OrderBook = () => {
  const { orderBookList } = useGetOrderBook();

  return (
    <View style={{ marginBottom: 120, marginTop: 30 }}>
      <View style={[Styles.headerBox]}>
        <View style={Styles.rowBox}>
          <Text>Size</Text>
        </View>
        <View style={[Styles.rowBox]}>
          <Text style={Styles.boldTitle}>Bid</Text>
        </View>

        <View style={Styles.rowBox}>
          <Text style={Styles.boldTitle}>Ask</Text>
        </View>

        <View style={Styles.rowBox}>
          <Text>Size</Text>
        </View>
      </View>

      {/* //BID Section */}
      <View style={Styles.rowCore}>
        <View style={[Styles.rowBox]}>
          <RowItem values={orderBookList?.bid} itemKey="size" />
        </View>
        <View style={[Styles.rowBox]}>
          <RowItem
            textStyle={Styles.bid}
            values={orderBookList?.bid}
            itemKey="price"
          />
        </View>

        {/* //ASK Section */}
        <View style={Styles.rowBox}>
          <RowItem
            textStyle={Styles.ask}
            values={orderBookList?.ask}
            itemKey="price"
          />
        </View>
        <View style={Styles.rowBox}>
          <RowItem values={orderBookList?.ask} itemKey="size" />
        </View>
      </View>
    </View>
  );
};

export default OrderBook;
