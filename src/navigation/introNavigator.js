import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FirebaseAuth } from "../api/firebase";
import { colors } from "../config";

const IntroNavigator = () => {
  return (
    <View stylee={styles.container}>
      <Text> You are now logged in!</Text>
      <TouchableOpacity onPress={() => FirebaseAuth.signOut()}>
        <Text>Log me out!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default IntroNavigator;
