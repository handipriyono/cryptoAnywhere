import { View, TouchableOpacity, Alert, Text } from "react-native";
import Styles from "./style";

const FooterActionDetail = () => {
  const onPressSell = () => {
    // todo: add action
  };
  const onPressBuy = () => {
    //todo: add action
  };

  return (
    <View style={[Styles.footerWrapper]}>
      <TouchableOpacity
        onPress={onPressSell}
        style={[Styles.buttonAction, { backgroundColor: "red" }]}
      >
        <Text style={{ fontWeight: "bold", color: "white" }}>Sell</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressBuy}
        style={[Styles.buttonAction, { backgroundColor: "green" }]}
      >
        <Text style={{ fontWeight: "bold", color: "white" }}>Buy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterActionDetail;
