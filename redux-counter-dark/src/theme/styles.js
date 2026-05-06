import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  card: {
    borderRadius: 28,
    elevation: 4,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.12,
    shadowRadius: 16,
  },
  themeRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  themeText: {
    fontSize: 18,
    fontWeight: "600",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
  },
  counter: {
    fontSize: 72,
    fontWeight: "800",
    marginBottom: 24,
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "center",
    marginBottom: 16,
  },
  smallButton: {
    alignItems: "center",
    borderRadius: 16,
    minWidth: 96,
    paddingVertical: 14,
  },
  resetButton: {
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 2,
    paddingVertical: 14,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "700",
  },
  resetText: {
    fontSize: 18,
    fontWeight: "700",
  },
});
