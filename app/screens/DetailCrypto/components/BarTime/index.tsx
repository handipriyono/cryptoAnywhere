import { TouchableOpacity, View, Text } from "react-native";
import React, { useState } from "react";
import useGetCryptoDetailStore from "../../stores/index";
import { useShallow } from "zustand/react/shallow";
import Styles from "./style";

const indexTime = ["1m", "12h", "1d", "1w"];

const BarTime = () => {
  const { timeRangeSelected, setTimeRangeSelected } = useGetCryptoDetailStore(
    useShallow((state) => ({
      timeRangeSelected: state.timeRangeSelected,
      setTimeRangeSelected: state.setTimeRangeSelected,
    }))
  );

  return (
    <View style={Styles.barTimeWrapper}>
      {indexTime.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            flex: 1,
            marginHorizontal: 2,
            backgroundColor: timeRangeSelected === item ? "#329239" : "#eee",
            padding: 7,
            borderRadius: 3,
          }}
          onPress={() => setTimeRangeSelected(item)}
        >
          <Text
            style={{
              color: timeRangeSelected === item ? "white" : "black",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BarTime;
