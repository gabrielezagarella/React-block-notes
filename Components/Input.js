import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const Input = props => {
  const [enteredText, setEnteredText] = useState("");

  const inputHandler = text => {
    setEnteredText(text);
  };
  const addText = () => {
    props.add(enteredText);
    setEnteredText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.viewTextInput}>
        <TextInput
          placeholder="Write"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={enteredText}
        />
        <View style={styles.buttonConteiner}>
          <View style={styles.button}>
            <Button title="Add" onPress={addText} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.cancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  viewTextInput: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    borderColor: "black",
    borderWidth: 3,
    width: "80%",
    padding: 10,
    marginBottom: 10
  },
  buttonConteiner: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});
export default Input;
