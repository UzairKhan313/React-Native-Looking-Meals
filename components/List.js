import { StyleSheet, View, Text } from "react-native";

export const List = ({ data }) => {
  return data.map((dataPiont) => (
    <View key={dataPiont} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPiont}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
