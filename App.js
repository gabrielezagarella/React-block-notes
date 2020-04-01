import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [texts, setTexts] = useState([]);

  const inputHandler = text => {
    setEnteredText(text);
  };
  const addTextHandler = () => {
    if (enteredText.trim() === "") {
      return alert("write something!");
    }
    setTexts(courrentText => [
      ...courrentText,
      { id: Math.random().toString(), value: enteredText }
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewTextInput}>
        <TextInput
          placeholder="Write"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={enteredText}
        />
        <Button title="Add" onPress={addTextHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={texts}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
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
  },
  listItem: {
    padding: 20,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10
  }
});
