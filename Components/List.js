import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const List = props => {
  
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onDelete.bind(this, props.id)}>
    <View style={styles.listItem}>
      <Text>{props.list}</Text>
      </View>
      </TouchableOpacity>
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
