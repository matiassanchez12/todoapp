import React from "react";

import { Stack } from "@chakra-ui/react";

import Tabs from "../components/tabs";
import Nav from "../components/header/Nav";
import Footer from "../components/footer";
import Head from "../components/common/Head";

import "react-calendar/dist/Calendar.css";

function App() {
  return (
    <>
      <Head />
      <Stack h="100%" minH="100vh" w="100%" minW="360px">
        <Nav />
        <Tabs />
        {/* <Footer /> */}
      </Stack>
    </>
  );
}

export default App;
