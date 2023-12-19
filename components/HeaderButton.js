import { StyleSheet, Pressable, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export const HeaderButton = ({ icon, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      
      <Ionicons name={icon} size={32} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: { opacity: 0.7 },
});
