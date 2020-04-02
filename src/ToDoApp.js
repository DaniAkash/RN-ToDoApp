import React, { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import useColors from "./hooks/useColors";
import Header from "./Components/Header";
import TaskInput from "./Components/TaskInput";

const ToDoApp = () => {
  const { backgroundColor, contentBackgroundColor } = useColors();
  const [newTaskText, setNewTaskText] = useState();
  const [tasks, setTasks] = useState([
    {
      text: "Gardening",
      isComplete: false
    },
    {
      text: "Grocery",
      isComplete: false
    },
    {
      text: "Car Wash",
      isComplete: false
    }
  ]);

  const updateText = updatedText => setNewTaskText(updatedText);

  const addTask = () => null;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <Header />

      <ScrollView style={{ backgroundColor: contentBackgroundColor }}>
        <TaskInput
          newTaskText={newTaskText}
          addTask={addTask}
          updateText={updateText}
        />
        {tasks.map((task, taskIndex) => {
          return <Text key={taskIndex}>{task.text}</Text>;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ToDoApp;
