import { MEALS } from "../data/dummy-data";
import { StyleSheet, View, Text } from "react-native";

export const MealsScreen = ({ route }) => {
  // route prop is added by the React Navigation to those component which are registered as a screen.
  const catId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
