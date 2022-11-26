import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { MEALS } from "../assets/data/dummy-data";

const DetailScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedMeal.duration}m</Text>
        <Text style={styles.detailItem}>
          {selectedMeal.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailItem}>
          {selectedMeal.affordability.toUpperCase()}
        </Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Ingredients</Text>
      </View>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Steps</Text>
      </View>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#fffff",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: "#FFffff",
  },
  subtitleContainer: {
    marginVertical: 4,
    padding: 6,
    marginHorizontal: 24,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
