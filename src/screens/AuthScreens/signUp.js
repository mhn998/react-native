import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../config";
import { connect } from "react-redux";
import {
  updateEmail,
  updatePassword,
  updateUserName,
  signUp,
} from "../../actions/user";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

function SingUpScreen({
  onUpdateEmail,
  onUpdatePassword,
  onUpdateUserName,
  onSignUp,
  user,
  navigation,
}) {
  const [repeatedPassword, setUpdateRepeatedPassword] = useState();

  const handleSignUp = () => {
    if (user.password == repeatedPassword && user.userName !== "") {
      onSignUp();
    } else {
      Alert.alert("No Match!");
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text style={{ left: 15 }}>User Name</Text>
        <TextInput
          placeholder={"mhnMugh!"}
          placeholderTextColor={colors.grey}
          style={styles.input}
          onChangeText={(input) => onUpdateUserName(input)}
          value={user.userName}
        />
        <Text style={{ left: 15 }}>Email</Text>
        <TextInput
          placeholder={"example@example.com"}
          placeholderTextColor={colors.grey}
          style={styles.input}
          onChangeText={(input) => onUpdateEmail(input)}
          value={user.email}
        />
        <Text style={{ left: 15, marginTop: 10 }}>Password</Text>
        <TextInput
          placeholder={"Password"}
          placeholderTextColor={colors.grey}
          style={styles.input}
          onChangeText={(input) => onUpdatePassword(input)}
          value={user.password}
          secureTextEntry
        />
        <Text style={{ left: 15, marginTop: 10 }}>Repeat Password</Text>
        <TextInput
          placeholder={""}
          placeholderTextColor={colors.grey}
          style={styles.input}
          onChangeText={(input) => setUpdateRepeatedPassword(input)}
          value={repeatedPassword}
          secureTextEntry
        />
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            onPress={handleSignUp}
            style={{
              width: screenWidth * 0.6,
              height: 50,
              borderRadius: 30,
              backgroundColor: colors.blue,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                padding: "5%",
                left: "35%",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
  input: {
    height: 50,
    width: screenWidth * 0.9,
    backgroundColor: colors.white,
    color: colors.black,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: colors.grey,
    borderWidth: 1,
  },
  touchable: {
    backgroundColor: "#229954",
  },
  container: {
    marginTop: 30,
    height: screenHeight + 50,
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#000",
    flex: 1,
  },
  backGroundImage: {
    position: "absolute",
    zIndex: -1,
    width: screenWidth,
  },
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateEmail: (text) => dispatch(updateEmail(text)),
  onUpdatePassword: (text) => dispatch(updatePassword(text)),
  onUpdateUserName: (text) => dispatch(updateUserName(text)),
  onSignUp: () => dispatch(signUp()),
});

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(SingUpScreen);
