import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoryScreen from "./screens/CategoryScreen";
import { MealsScreen } from "./screens/MealsScreen";
import { MealsDetailScreen } from "./screens/MealsDetailScreen";
import { FavoritesScreen } from "./screens/FavoritesScreen";

const stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        headerTitleAlign: "center",
      }}
    >
      <Drawer.Screen name="Category" component={CategoryScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
            headerTitleAlign: "center",
          }}
        >
          <stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen name="meals" component={MealsScreen} />
          <stack.Screen
            name="mealDetail"
            component={MealsDetailScreen}
            options={{
              title: "About the Meal",
            }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
