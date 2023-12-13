import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  Platform,
} from "react-native";

export const MealItem = ({
  title,
  imageUrl,
  duration,
  complixity,
  affordability,
}) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={"#ccc"}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complixity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.25,
  },
  image: { width: "100%", height: 200 },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 16,
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
