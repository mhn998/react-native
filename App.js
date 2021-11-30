import React from "react";
import { StyleSheet } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./src/reducers/index";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./src/navigation/drawerNavigator";

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
      {/* <NavigationContainer> */}

      {/* </NavigationContainer> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    // flexDirection: "row",
    // backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-start",

    // padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
