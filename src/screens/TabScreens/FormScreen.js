import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { colors } from "../../config";
import FormComponent from "../../components/formComponent";

const FormScreen = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [formObj, setformObj] = useState({});

  const handleSubmittion = (data) => {
    if (data) {
      setformObj(data);
      setIsOpenModal(true);
    }
  };

  return (
    <View>
      <FormComponent submit={handleSubmittion} />
      <Modal visible={isOpenModal}>
        <TouchableOpacity
          style={{ justifyContent: "center" }}
          onPress={() => setIsOpenModal(false)}
        >
          <Text>Close!</Text>
        </TouchableOpacity>
        <FlatList
          data={[formObj]}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.text}> {item.author} </Text>
              <Text style={styles.text}> {item.title} </Text>
              <Text style={styles.text}> {item.style} </Text>
            </View>
          )}
          style={styles.flatList}
        />
      </Modal>
    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
    width: 200,
    backgroundColor: colors.white,
    fontSize: 18,
    color: colors.black,
    marginHorizontal: 5,
  },
});
