import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

function WelcomScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bg.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            width: 50,
            height: 50,
            uri: "https://logo.clearbit.com/facebook.com",
          }}
        />
        <Text> Sell what you don't need </Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#Fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomScreen;
