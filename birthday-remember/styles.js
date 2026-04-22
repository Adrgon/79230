import { StyleSheet } from "react-native";
import colors from "./colors";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pink,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "90%",
    maxWidth: 450,
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary5,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.primary5,
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  person: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: colors.primary1,
    padding: 10,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    marginRight: 15,
  },
  info: {
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary7,
    marginBottom: 5,
  },
  age: {
    color: colors.grey6,
    fontSize: 16,
  },
});

export default globalStyles;
