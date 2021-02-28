import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppIcon from "./AppIcon";
import AppText from "./AppText";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AppIcon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        iconColor={item.color}
        size={70}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
export default CategoryPickerItem;
