import { Platform } from "react-native";
import colors from "./colors";

export default {
  textInput: {
    width: "90%",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
};
