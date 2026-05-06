import { StyleSheet } from "react-native";

export const colors = {
  primary: "#2680c0",
  primaryDark: "#0d4b7a",
  primaryLight: "#74b9e8",
  grey1: "#102a42",
  grey5: "#617d98",
  grey10: "#f1f5f8",
  white: "#fff",
  redDark: "#bb2525",
  redLight: "#e66b6b",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey10,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 20,
    color: colors.grey1,
  },
  nav: {
    backgroundColor: colors.primary,
    padding: 20,
  },
  navCenter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  navContainer: {
    position: "relative",
  },
  amountContainer: {
    position: "absolute",
    top: -10,
    right: -10,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
  },
  totalAmount: {
    color: colors.white,
    fontSize: 16,
  },
  cart: {
    flex: 1,
    padding: 20,
  },
  cartTitle: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 30,
    color: colors.grey1,
  },
  emptyCart: {
    fontSize: 16,
    color: colors.grey5,
    textAlign: "center",
    marginTop: 10,
  },
  cartFooter: {
    marginTop: 40,
  },
  cartTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  clearButton: {
    backgroundColor: "transparent",
    padding: 10,
    borderWidth: 1,
    borderColor: colors.redDark,
    borderRadius: 5,
    marginTop: 20,
  },
  clearButtonText: {
    color: colors.redDark,
    textAlign: "center",
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  cartItemImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  cartItemContent: {
    flex: 1,
    marginLeft: 15,
  },
  cartItemTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  itemPrice: {
    color: colors.grey5,
    fontSize: 16,
  },
  removeButton: {
    color: colors.primary,
    fontSize: 14,
    marginTop: 5,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  amountButton: {
    padding: 5,
  },
  amount: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
});
