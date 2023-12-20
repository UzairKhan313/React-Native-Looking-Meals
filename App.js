import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";

// import custom Componets
import CategoryScreen from "./screens/CategoryScreen";
import { MealsScreen } from "./screens/MealsScreen";
import { MealsDetailScreen } from "./screens/MealsDetailScreen";
import { FavoritesScreen } from "./screens/FavoritesScreen";

import { FavoriteContextProvider } from "./store/context/favorites-context";

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
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorite",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoriteContextProvider>
        <NavigationContainer>
          <stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              // contentStyle: { backgroundColor: "#3f2f25" },
              headerTitleAlign: "center",
              cardStyle: {
                backgroundColor: "#3f2f25",
              },
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
                contentStyle: { backgroundColor: "#3f2f25" },
              }}
            />
          </stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}
