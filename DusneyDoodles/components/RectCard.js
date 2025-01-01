import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const RectCard = ({ title, content, image, status }) => {
  return (
    <View style={styles.card}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      {status && <Text style={styles.status}>{status}</Text>}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF8E7", // Cream White for the card background
    borderRadius: 10,
    padding: 16,
    marginTop: 10,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  status: {
    fontSize: 14,
    color: "#FFD700", // Golden Yellow for status
    fontWeight: "bold",
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF0000", // Mickey Red for the title
    marginBottom: 4,
  },
  content: {
    fontSize: 14,
    color: "#333", // Black text color for content
  },
});

export default RectCard;
