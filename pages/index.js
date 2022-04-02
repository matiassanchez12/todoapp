import React from "react";

import { Stack } from "@chakra-ui/react";

import Tabs from "../components/tabs";
import Nav from "../components/header/Nav";
import Footer from "../components/footer";

import "react-calendar/dist/Calendar.css";

function App() {
  return (
    <Stack h="100%" minH="100vh" minW="450px">
      <Nav />
      <Tabs />
      <Footer />
    </Stack>
  );
}

export default App;
