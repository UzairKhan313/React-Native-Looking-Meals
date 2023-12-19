import { StyleSheet, View, Text } from "react-native";

export const Subtitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
