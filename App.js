import React from "react";
import { AppearanceProvider } from "react-native-appearance";
import ToDoApp from "./src/ToDoApp";

const App = () => {
  return (
    <AppearanceProvider>
      <ToDoApp />
    </AppearanceProvider>
  );
};

export default App;
