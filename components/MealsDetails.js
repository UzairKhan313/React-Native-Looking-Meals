import { StyleSheet, View, Text } from "react-native";
export const MealsDetails = ({
  duration,
  complixity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.detail, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complixity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
