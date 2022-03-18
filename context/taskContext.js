import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

export const TaskContext = React.createContext({ darkMode: true, setDarkMode: () => {} });

export const useTasks = () => React.useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <TaskContext.Provider value={{ darkMode, setDarkMode }}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </TaskContext.Provider>
  );
};
