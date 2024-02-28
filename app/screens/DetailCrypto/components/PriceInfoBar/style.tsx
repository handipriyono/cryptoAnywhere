import { StyleSheet } from "react-native";

export default StyleSheet.create({
  priceWrapper: {
    height: 65,
    backgroundColor: "white",
    paddingTop: 10,
    paddingHorizontal: 8,
  },
  dateBarText: { marginBottom: 5, fontSize: 13 },
  title: { fontSize: 12, color: "#808080" },
  titleRow: { fontWeight: "600", fontSize: 13 },
  closeOpenSection: { paddingBottom: 10, marginBottom: 10 },
  closeOpenInnerWrapper: { flex: 1, paddingRight: 10 },
  rowBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: { fontSize: 22, fontWeight: "800" },
  priceSelectedWrapper: {
    flexDirection: "column",
    height: 65,
    backgroundColor: "white",
    paddingTop: 10,
    paddingHorizontal: 8,
  },
});
