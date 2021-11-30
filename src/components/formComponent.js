import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

const formSchema = yup.object({
  title: yup.string().required().min(4),
  author: yup.string().required(),
  style: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1 - 5", (value) => {
      return parseInt(value) < 6 && parseInt(value) > 0;
    }),
});

// const constants = {
//   screenHeight: Dimensions.get("screen").height,
//   screenWidth: Dimensions.get("screen").width,
//   formWidth: screenWidth * 0.7,
// };

const FormComponent = ({ submit }) => {
  return (
    // <View>
    <Formik
      initialValues={{ title: "", author: "", style: "" }}
      onSubmit={(values, actions) => {
        actions.resetForm();
        submit(values);
      }}
      validationSchema={formSchema}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        handleBlur,
      }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={"title"}
            onChangeText={handleChange("title")}
            value={values.title}
            onBlur={handleBlur("title")}
          />
          <Text style={styles.errorText}>{touched.title && errors.title}</Text>
          <TextInput
            style={styles.input}
            placeholder={"author"}
            onChangeText={handleChange("author")}
            value={values.author}
            onBlur={handleBlur("author")}
          />
          <Text style={styles.errorText}>
            {touched.author && errors.author}
          </Text>
          <TextInput
            style={styles.input}
            placeholder={"style"}
            onChangeText={handleChange("style")}
            value={values.style}
            onBlur={handleBlur("style")}
          />
          <Text style={styles.errorText}>{touched.style && errors.style}</Text>
          <Button
            title="Submit"
            style={styles.submitButton}
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
    // </View>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: "red",
    marginTop: 50,
    padding: 20,
    color: "grey",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 10,
    marginTop: 30,
    width: 300,
    backgroundColor: "#ddd",
  },
  errorText: {
    width: 200,
    color: "crimson",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default FormComponent;
