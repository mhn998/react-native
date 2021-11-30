import { Alert } from "react-native";
import { DB, FirebaseAuth } from "../api/firebase";
import { doc, addDoc } from "@firebase/firestore";
import { orderBy } from "lodash";

import { collection } from "@firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { cloneElement } from "react";

export const updateEmail = (input) => {
  return { type: "UPDATE_EMAIL", payload: input };
};

export const updatePassword = (input) => {
  return { type: "UPDATE_PASSWORD", payload: input };
};

export const updateUserName = (input) => {
  return { type: "UPDATE_USERNAME", payload: input };
};

export const signUp = () => async (dispatch, getState) => {
  try {
    const { userName, email, password } = getState().user;
    const res = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    if (res.user.uid) {
      const user = {
        id: res.user.uid,
        username: userName,
        email,
        posts: [],
        bio: "Hello There",
        likes: 0,
        photos: "",
      };
      const usersCollectionRef = collection(DB, "users");
      await addDoc(usersCollectionRef, user);
      dispatch({ type: "LOGIN", payload: user });
      Alert.alert("user has been Signed up!");
    }
  } catch (e) {
    console.log(e.message);
  }
};

export const login = () => async (dispatch, getState) => {
  try {
    const { email, password } = getState().user;
    const res = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    dispatch(getUser(res.user.uid));
  } catch (e) {
    console.log(e.message);
  }
};

export const getUser = (id) => {
  return async (dispatch) => {
    try {
      const useQuery = await collection(DB, "users").doc(id).get();
      const users = useQuery.data();
      let posts = [];

      const postsQuery = await collection(DB, "users")
        .where("uid", "==", id)
        .get();

      postsQuery.forEach((res) => {
        posts.push(res.data());
      });
      users.posts = orderBy(posts, "data", "desc");
      dispatch({ type: "LOGIN", payload: users });
    } catch (e) {
      console.log(e.message);
    }
  };
};
