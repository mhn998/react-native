import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { colors } from "../../config";
import { updateEmail, updatePassword, login } from "../../actions/user";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
function LoginScreen({
  onUpdateEmail,
  onUpdatePassword,
  user,
  navigation,
  onLogin,
}) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image
          style={styles.backGroundImage}
          source={require("../../assets/background.jpg")}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            fontFamily: "Inter_900Black",
          }}
        >
          Instagram
        </Text>
        <View style={{ marginTop: 100 }}>
          <View>
            <Text style={{ width: screenWidth * 0.9, left: 15, marginTop: 10 }}>
              Email
            </Text>
          </View>
          <TextInput
            placeholder={"example@example.com"}
            placeholderTextColor={colors.grey}
            style={styles.input}
            onChangeText={(input) => onUpdateEmail(input)}
            value={user.email}
          ></TextInput>
          <View>
            <Text style={{ width: screenWidth * 0.9, left: 15, marginTop: 10 }}>
              Password
            </Text>
          </View>
          <TextInput
            placeholder={"Password"}
            placeholderTextColor={colors.grey}
            style={styles.input}
            onChangeText={(input) => onUpdatePassword(input)}
            value={user.password}
            secureTextEntry
          />
        </View>
        <View style={styles.login}>
          <TouchableOpacity
            onPress={() => onLogin()}
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
              LOGIN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 18, color: colors.grey }}>
              Don't have an account?{" "}
            </Text>
            <Text
              onPress={() => navigation.navigate("SignUp")}
              style={{ fontSize: 18, color: colors.blue }}
            >
              {" "}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ position: "absolute", bottom: 60, alignItems: "center" }}
        >
          <Text style={{ fontSize: 18, zIndex: -1 }}> From </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", zIndex: -1 }}>
            {" "}
            MUGH
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    borderColor: "grey",
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

//or bindActionCreators({UpdatePassword , UopdateEmail , login} , dispatch)
const mapDispatchToProps = (dispatch) => ({
  onUpdateEmail: (text) => dispatch(updateEmail(text)),
  onUpdatePassword: (text) => dispatch(updatePassword(text)),
  onLogin: () => dispatch(login()),
});

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
