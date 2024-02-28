import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import useGetCryptoDetail from "../../../screens/DetailCrypto/stores";
import Styles from "./style";

const HeaderBack = () => {
  const { selectedSymbol } = useGetCryptoDetail();
  return (
    <View>
      <View style={Styles.headerBackWrapper}>
        <View>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={20} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontWeight: "bold" }}>{selectedSymbol} Price</Text>
        </View>
        <View>
          <TouchableOpacity>
            <AntDesign name={"star"} size={20} color="orange" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderBack;
