import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import { CATEGORIES } from "../assets/data/dummy-data";
import CategoryGridTile from "../assets/components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      key={"#"}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
