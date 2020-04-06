import React, { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import useColors from "./hooks/useColors";
import Header from "./Components/Header";
import TaskInput from "./Components/TaskInput";
import Task from "./Components/Task";

const ToDoApp = () => {
  const { backgroundColor, contentBackgroundColor } = useColors();
  const [newTaskText, setNewTaskText] = useState();
  const [tasks, setTasks] = useState([
    {
      text: "Gardening",
      isComplete: false,
    },
    {
      text: "Grocery",
      isComplete: false,
    },
    {
      text: "Car Wash",
      isComplete: false,
    },
  ]);

  const updateText = (updatedText) => setNewTaskText(updatedText);

  const toggleTask = (taskIndex) => {
    setTasks(
      tasks.map((task, index) => {
        if (index === taskIndex) {
          return {
            ...task,
            isComplete: !task.isComplete,
          };
        }
        return task;
      })
    );
  };

  const addTask = (newTask) => {
    setNewTaskText("");
    setTasks([
      ...tasks,
      {
        text: newTask,
        isComplete: false,
      },
    ]);
  };

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
          return (
            <Task
              key={taskIndex}
              text={task.text}
              status={task.isComplete}
              toggleTask={toggleTask}
              taskIndex={taskIndex}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ToDoApp;
