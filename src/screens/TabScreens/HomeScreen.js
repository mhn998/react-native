import React from "react";
import { View, StyleSheet, Text } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome Homee!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default HomeScreen;
