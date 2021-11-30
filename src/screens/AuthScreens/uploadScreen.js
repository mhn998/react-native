import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  SafeAreaView,
} from "react-native";
import { Camera } from "expo-camera";
import { colors } from "../../config";
import { ScrollView } from "react-native-gesture-handler";

const UploadScreen = () => {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [triggeredCamera, setIsTriggeredCamera] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ width: screenWidth, height: 360, alignItems: "center" }}>
          <Image source={require("../../assets/cat.jpeg")}></Image>
        </View>
        <View style={{ width: screenWidth, alignItems: "center", height: 360 }}>
          <TouchableOpacity
            style={styles.wrapper}
            onPress={() => setIsTriggeredCamera(true)}
          >
            <View style={styles.container}>
              <Text>+</Text>
            </View>
          </TouchableOpacity>
          <Camera
            style={{
              marginTop: 30,
              width: screenWidth * 0.8,
              height: screenHeight * 0.8,
            }}
            type={type}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <Text style={styles.text}> Flip </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    width: 200,
    height: 50,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 30,
  },
  container: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UploadScreen;
