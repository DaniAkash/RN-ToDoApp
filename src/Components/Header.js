import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useColors from "../hooks/useColors";

const Header = () => {
  const { backgroundColor, titleColor } = useColors();

  return (
    <View style={[styles.header, { backgroundColor }]}>
      <Text style={[styles.headerText, { color: titleColor }]}>ToDo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  header: {
    height: 56,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Header;
