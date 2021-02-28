import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <AppText>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
  },
});

export default PickerItem;
