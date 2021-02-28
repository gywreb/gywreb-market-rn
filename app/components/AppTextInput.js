import React from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, width = "100%", ...componentProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        {...componentProps}
        style={defaultStyles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
