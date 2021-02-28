import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";
const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={10}
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      style={styles.homeBackground}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.inputContainer}>
        <AppButton title="Login" onPress={() => console.log("login")} />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  homeBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoContainer: {
    position: "absolute",
    top: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagLine: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
});

export default WelcomeScreen;
