import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const Input = props => {
  const [enteredText, setEnteredText] = useState("");

  const inputHandler = text => {
    setEnteredText(text);
  };

  return (
    <View style={styles.viewTextInput}>
      <TextInput
        placeholder="Write"
        style={styles.textInput}
        onChangeText={inputHandler}
        value={enteredText}
      />
      <Button title="Add" onPress={props.add.bind(this, enteredText)} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewTextInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    borderColor: "black",
    borderWidth: 3,
    width: "80%",
    padding: 10
  }
});
export default Input;
