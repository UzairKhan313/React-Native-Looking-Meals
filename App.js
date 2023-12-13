import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";

export default function App() {
  return (
    <>
      <CategoryScreen />
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
