import { StyleSheet, View, Text } from "react-native";

// import { useContext } from "react";

import { MealsList } from "../components/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

export const FavoritesScreen = () => {
  // const favoriteMealCtx = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeal.ids);

  const favoriteMeal = MEALS.filter((meal) =>
    // favoriteMealCtx.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)
  );
  if (favoriteMeal.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meal yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeal} />;
};

const styles = StyleSheet.create({
  rootContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, fontWeight: "bold", color: "white" },
});
