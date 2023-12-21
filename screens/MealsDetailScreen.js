import { useLayoutEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StyleSheet, ScrollView, Text, Image, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealsDetails } from "../components/MealsDetails";
import { Subtitle } from "../components/Subtitle";
import { List } from "../components/List";
import { HeaderButton } from "../components/HeaderButton";
import { addFavorite, removeFavorite } from "../store/redux/favorite";
// import { FavoritesContext } from "../store/context/favorites-context";

export const MealsDetailScreen = ({ route, navigation }) => {
  // const favoriteMealCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeal.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeals = MEALS.find((meal) => meal.id === mealId);
  let MealIsFavorite;

  // if (favoriteMealCtx.ids) {
   
    // MealIsFavorite = favoriteMealCtx.ids.includes(mealId);
    MealIsFavorite = favoriteMealIds.includes(mealId);
  // }

  function changeFavoriteStatusHandler() {
    if (MealIsFavorite) {
      // favoriteMealCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderButton
            icon={MealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeals.imageUrl }} />
      <Text style={styles.title}>{selectedMeals.title}</Text>
      <MealsDetails
        duration={selectedMeals.duration}
        complixity={selectedMeals.complexity}
        affordability={selectedMeals.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeals.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeals.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },
  image: { width: "100%", height: 350 },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: { color: "white" },
  listOuterContainer: { alignItems: "center" },
  listContainer: { width: "80%" },
});
