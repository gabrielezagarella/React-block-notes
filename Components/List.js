import React from "react";
import { StyleSheet, Text, View } from "react-native";

const List = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.list}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10
  }
});
export default List;
