import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import useColors from "../hooks/useColors";

const TaskInput = ({ newTaskText, updateText, addTask }) => {
  const { textColor } = useColors();

  return (
    <View style={styles.taskInputContainer}>
      <TextInput
        value={newTaskText}
        placeholder={"Add new task!"}
        onChangeText={updateText}
        style={[styles.taskInputField, { color: textColor }]}
      />
      <Button title={"Add"} onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  taskInputContainer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 24
  },
  taskInputField: {
    flex: 1,
    fontSize: 18
  }
});

export default TaskInput;