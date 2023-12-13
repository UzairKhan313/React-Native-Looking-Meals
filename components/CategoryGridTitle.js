import { StyleSheet, View, Pressable, Text, Platform } from "react-native";

export const CategoryGridTitle = ({ title, color, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer,{backgroundColor:color} ]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white", // for IOS to set border shadow background color must be set.
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  button: { flex: 1 },
  buttonPressed: {
    opacity: 0.25,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    // padding:16
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
