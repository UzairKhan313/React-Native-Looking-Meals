import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import { CategoryGridTitle } from "../components/CategoryGridTitle";

const CategoryScreen = ({ navigation }) => {
  // The Navigation and Route Props provided by the react Navigation and Route to only those Component which we use a screen.

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("meals", { categoryId: itemData.item.id });
    }
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    ></FlatList>
  );
};

export default CategoryScreen;
