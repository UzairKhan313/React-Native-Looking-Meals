import { useLayoutEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { MealItem } from "../components/MealItem";
import { MealsList } from "../components/MealsList";

export const MealsScreen = ({ route, navigation }) => {
  // route prop is added by the React Navigation to those component which are registered as a screen.
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    // setting up screen title Dynamically.
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};
