import { StyleSheet } from "react-native";

// STYLE EKSTERNAL: styling ditaruh di file terpisah
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef3e2",
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4a2c17",
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: 2,
    borderColor: "#8b5a2b",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 10,
    elevation: 3,
    shadowColor: "#000",
  },
  cardName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4a2c17",
  },
  cardPrice: {
    fontSize: 15,
    marginTop: 4,
  },
  total: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 12,
    color: "#4a2c17",
  },
});