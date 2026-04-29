import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#eef2ff",
    justifyContent: "center",
  },
  header: {
    marginBottom: 18,
  },
  badge: {
    alignSelf: "center",
    backgroundColor: "#dbeafe",
    color: "#1e40af",
    fontWeight: "700",
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    marginTop: 8,
    color: "#425466",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
    color: "#0f172a",
  },
  subtitle: {
    textAlign: "center",
    color: "#475569",
    marginTop: 8,
    marginBottom: 8,
    fontSize: 14,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    gap: 12,
    shadowColor: "#1e293b",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#334155",
    marginBottom: -4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: "#f8fafc",
    color: "#0f172a",
    fontSize: 15,
  },
  primaryButton: {
    backgroundColor: "#2563eb",
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: "center",
    marginTop: 4,
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
  secondaryButton: {
    backgroundColor: "#e2e8f0",
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: "center",
  },
  modeSwitchButton: {
    paddingVertical: 8,
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.82,
    transform: [{ scale: 0.995 }],
  },
  secondaryButtonText: {
    color: "#1e293b",
    fontWeight: "700",
    fontSize: 15,
  },
  modeSwitchText: {
    color: "#2563eb",
    fontWeight: "600",
    fontSize: 14,
  },
  welcome: {
    fontSize: 26,
    fontWeight: "800",
    textAlign: "center",
    color: "#0f172a",
  },
  userEmail: {
    fontSize: 17,
    textAlign: "center",
    color: "#475569",
    marginBottom: 8,
  },
});

export default globalStyles;
