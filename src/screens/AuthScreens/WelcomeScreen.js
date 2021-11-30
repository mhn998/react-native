import React, { useEffect } from "react";
import { View, StyleSheet, Text, Alert, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FirebaseAuth } from "../../api/firebase";
import { getUser } from "../../actions/user";

const WelcomeScreen = ({ getUser, navigation }) => {
  useEffect(() => {
    setTimeout(
      () =>
        FirebaseAuth.onAuthStateChanged((user) => {
          if (user) {
            getUser(user.uid, "LOGIN");
            if (user != null) {
              navigation.navigate("IntroNavigator");
              navigation.reset({
                index: 0,
                routes: [{ name: "IntroNavigator" }],
              });
            }
          } else {
            navigation.navigate("Login");
          }
        }),
      2000
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: "#ddd", fontWeight: "bold" }}>
        Welcome!!!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getUser }, dispatch);

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
