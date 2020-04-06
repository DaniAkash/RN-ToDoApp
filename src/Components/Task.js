import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import useColors from "../hooks/useColors";

const Task = ({ text, taskIndex, toggleTask, status }) => {
  const onClickSwitch = () => toggleTask(taskIndex);

  const {
    textColor,
    titleColor,
    backgroundColor,
    contentBackgroundColor,
  } = useColors();

  return (
    <View style={styles.taskContainer}>
      <Switch
        trackColor={{
          false: backgroundColor,
          true: titleColor,
        }}
        thumbColor={contentBackgroundColor}
        value={status}
        onValueChange={onClickSwitch}
      />
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 24,
  },
  text: {
    fontSize: 18,
    marginLeft: 8,
  },
});

export default Task;
