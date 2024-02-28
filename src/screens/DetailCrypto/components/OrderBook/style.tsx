import { StyleSheet } from "react-native";

export default StyleSheet.create({
  headerBox: {
    display: "flex",
    padding: 10,
    flexDirection: "row",
    borderBottomWidth: 2,
    marginBottom: 10,
    borderColor: "#eee",
  },
  boldTitle: {
    fontWeight: "bold",
  },
  rowWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: 5,
  },
  valueText: {
    fontSize: 12,
  },
  ask: {
    color: "red",
    fontWeight: "bold",
  },
  bid: {
    fontWeight: "bold",
    color: "green",
  },
  rowBox: {
    flex: 1,
    borderColor: "#eee",
  },
  rowCore: {
    display: "flex",
    paddingHorizontal: 10,
    flexDirection: "row",
  },
});
