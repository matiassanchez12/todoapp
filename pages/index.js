import { Button, Fade, Stack } from "@chakra-ui/react";
import React from "react";
import Calendar from "react-calendar";
import List from "../components";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiTask } from "react-icons/bi";

// import { useTasks } from "../context/taskContext";
import "react-calendar/dist/Calendar.css";
import Nav from "../components/header/Nav";
import Footer from "../components/footer";

function App() {
  const [value, onChange] = React.useState(new Date());
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => onChange(new Date()), []);

  return (
    <Stack height="100vh" gap={6}>
      <Nav />
      <Stack h="100%" gap={6} paddingInline={8} marginBottom={4} justifyContent="center" alignItems="center">
        <Stack direction="row">
          <Button w={20} onClick={() => setIsOpen(!isOpen)}>
            <AiOutlineCalendar />
          </Button>
          <Button w={20}>
            <BiTask />
          </Button>
        </Stack>
        <Stack
          hidden={!isOpen}
          bg="teal.500"
          alignItems="end"
          borderRadius={4}
          p={6}
          color="blue.700"
          left="35%"
          position="absolute"
          zIndex={2}
        >
          <Button w={2} variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            x
          </Button>
          <Fade in={isOpen}>
            <Calendar onChange={onChange} value={value} />
          </Fade>
        </Stack>
        <Stack flex={1}>
          <List selectedDay={value} />
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}

export default App;
