import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import CategoryScreen from "./screens/CategoryScreen";
import { MealsScreen } from "./screens/MealsScreen";
import { MealsDetailScreen, MealsDetails } from "./screens/MealsDetailScreen";

const stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer >
        <stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <stack.Screen
            name="category"
            component={CategoryScreen}
            options={{
              title: "All Categories",
            }}
          />
          <stack.Screen
            name="meals"
            component={MealsScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return { title: catId };
            // }}
          />
          <stack.Screen name="mealDetail" component={MealsDetailScreen} options={{title:"Meal Detail"}}/>
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
