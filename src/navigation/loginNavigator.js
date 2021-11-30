import * as React from "react";
import AppLoading from "expo-app-loading";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/AuthScreens/WelcomeScreen";
import IntroNavigator from "./introNavigator";

import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

import LoginScreen from "../screens/AuthScreens/login";
import SingUpScreen from "../screens/AuthScreens/signUp";
const Stack = createStackNavigator();

export default function LoginNavigator() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false, title: "Login" }}
      />
      <Stack.Screen name="SignUp" component={SingUpScreen} />
      <Stack.Screen name="IntroNavigator" component={IntroNavigator} />
    </Stack.Navigator>
  );
}
