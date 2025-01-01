import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import axios from "axios";
import { useClick } from "../context/ClickContext";
import RectButton from "../components/RectButton";
import RectCard from "../components/RectCard";

const HomeScreen = ({ route }) => {
  const [characters, setCharacters] = useState([]);
  const { clickCount, incrementClick } = useClick();
  const { email } = route.params || {};

  // Fetch Disney characters
  const fetchCharacters = async () => {
    try {
      const response = await axios.get("https://disneyapi.dev/"); // Disney API
      const data = response.data.data.map((character) => ({
        id: character._id,
        name: character.name,
        films: character.films,
        tvShows: character.tvShows,
        imageUrl: character.imageUrl,
      }));
      setCharacters(data);
    } catch (error) {
      console.error("Error fetching characters:", error);
      setCharacters([]);
    }
  };

  // Refresh characters when button is pressed
  const handleRefreshCharacters = () => {
    incrementClick();
    fetchCharacters(); // Fetch Disney characters again
  };

  // Render each character
  const renderItem = ({ item }) => (
    <RectCard
      title={item.name}
      content={`Films: ${item.films.join(", ")}\nTV Shows: ${item.tvShows.join(", ")}`}
      image={item.imageUrl}
      status="Available" // Modify according to status if applicable
    />
  );

  useEffect(() => {
    fetchCharacters(); // Initial load of Disney characters
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>Welcome! {email}</Text>
      <RectButton title="Refresh Characters" onPress={handleRefreshCharacters} />
      <Text style={styles.header}>Disney Characters</Text>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <View style={styles.clickCountContainer}>
        <Text style={styles.clickCountText}>Clicks: {clickCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#e6ffe6", // Background color
  },
  welcomeTitle: {
    marginTop: 8,
    marginBottom: 16,
    fontSize: 20,
    color: "rgba(0, 0, 51)",
    fontWeight: "bold",
  },
  header: {
    marginTop: 16,
    fontSize: 28,
    color: "#FF0000",
    fontWeight: "bold",
    marginBottom: 16,
  },
  list: {
    marginTop: 16,
  },
  clickCountContainer: {
    position: "absolute",
    bottom: 10,
    right: 16,
    backgroundColor: "rgba(0, 0, 51, 0.9)",
    padding: 12,
    borderRadius: 70,
    shadowColor: "#000",
    shadowOpacity: 0.9,
    shadowRadius: 8,
  },
  clickCountText: {
    fontSize: 16,
    color: "#d9fdd9",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomeScreen;
