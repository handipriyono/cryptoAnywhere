import { View, TouchableOpacity, Alert, Text } from "react-native";
import Styles from "./style";

const FooterActionDetail = () => {
  return (
    <View style={[Styles.footerWrapper]}>
      <TouchableOpacity
        onPress={() => Alert.alert("Jual")}
        style={[Styles.buttonAction, { backgroundColor: "red" }]}
      >
        <Text style={{ fontWeight: "bold", color: "white" }}>Sell</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Alert.alert("Beli")}
        style={[Styles.buttonAction, { backgroundColor: "green" }]}
      >
        <Text style={{ fontWeight: "bold", color: "white" }}>Buy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterActionDetail;
