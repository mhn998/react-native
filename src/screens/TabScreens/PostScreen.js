import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { FirebaseAuth } from "../../api/firebase";
import { colors } from "../../config";
import fetchQuotes from "../../api/fetchQuotes";

const PostScreen = () => {
  const [authors, setAuthors] = useState([]);

  const fetchData = async () => {
    let count = 0;
    const apiAuthors = await fetchQuotes().then((res) =>
      res.map((item) => ({ name: item.a, id: count++ }))
    );
    setAuthors(apiAuthors);
  };

  useEffect(async () => {
    try {
      fetchData();
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  let count = 0;

  return (
    <View style={styles.container}>
      <Text>Welcome to Posts!!!</Text>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={authors}
        renderItem={({ item }) => <Text style={styles.text}>{item.name}</Text>}
      />
      {/* {authors?.map((author, i) => (
          <View style={styles.textView} key={i}>
            {i < 30 && <Text style={styles.text}>{author}</Text>}
          </View>
        ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    justifyContent: "center",
  },
  textView: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginBottom: 10,
    width: 200,
    backgroundColor: colors.white,
    fontSize: 18,
    color: colors.black,
    marginHorizontal: 5,
  },
});

export default PostScreen;
