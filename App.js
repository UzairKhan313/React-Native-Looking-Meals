import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import CategoryScreen from "./screens/CategoryScreen";
import { MealsScreen } from "./screens/MealsScreen";

const stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="category" component={CategoryScreen} />
          <stack.Screen name="meals" component={MealsScreen}/>
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
