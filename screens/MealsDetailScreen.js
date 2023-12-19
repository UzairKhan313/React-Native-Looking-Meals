import { useLayoutEffect } from "react";

import { StyleSheet, ScrollView, Text, Image, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealsDetails } from "../components/MealsDetails";
import { Subtitle } from "../components/Subtitle";
import { List } from "../components/List";
import { HeaderButton } from "../components/HeaderButton";

export const MealsDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const selectedMeals = MEALS.find((meal) => meal.id === mealId);
  function headerButtonPressHandler() {
    console.log("Pressed");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderButton
            icon="star"
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation,headerButtonPressHandler]);
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
