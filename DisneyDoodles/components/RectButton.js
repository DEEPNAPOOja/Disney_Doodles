import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const RectButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF0000", // Mickey Red as the background color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: "#FFD700", // Golden Yellow for the button text
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RectButton;
