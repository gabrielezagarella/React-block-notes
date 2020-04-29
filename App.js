import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import List from "./Components/List";
import Input from "./Components/Input";

export default function App() {
  const [texts, setTexts] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);
  const addTextHandler = text => {
    if (text.trim() === "") {
      return alert("write something!");
    }
    setTexts(courrentText => [
      ...courrentText,
      { id: Math.random().toString(), value: text }
    ]);
    setIsAddModal(false);
  };

  const deleteTextHandler = idText => {
    setTexts(courrentText => {
      return courrentText.filter(item => item.id !== idText);
    });
  };
  const closeModal = () => {
    setIsAddModal(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Add Note" onPress={() => setIsAddModal(true)} />
      <Input visible={isAddModal} add={addTextHandler} cancel={closeModal} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={texts}
        renderItem={itemData => (
          <List
            id={itemData.item.id}
            onDelete={deleteTextHandler}
            list={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
