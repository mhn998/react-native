import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import PostScreen from "../screens/TabScreens/PostScreen";
import LoginNavigator from "./loginNavigator";
import FormScreen from "../screens/TabScreens/FormScreen";
import UploadScreen from "../screens/AuthScreens/uploadScreen";

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home2" component={LoginNavigator} />
      {/* <Tab.Screen name="Posts" component={PostScreen} /> */}
      <Tab.Screen name="Form" component={FormScreen} />
      <Tab.Screen name="Upload" component={UploadScreen} />
    </Tab.Navigator>
  );
}
