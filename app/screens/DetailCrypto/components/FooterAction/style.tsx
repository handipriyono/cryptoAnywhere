import { StyleSheet } from "react-native";

export default StyleSheet.create({
  footerWrapper: {
    // flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    padding: 10,
    // borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingBottom: 35,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonAction: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    minHeight: 45,
    minWidth: 100,
    flex: 1,
    marginHorizontal: 10,
  },
});
