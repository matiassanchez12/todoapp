import { Box, Button, Container, Fade, Collapse, Stack } from "@chakra-ui/react";
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
    <Stack>
      <Nav />
      <>
        <Container maxW="container.lg" pt={3}>
          <Stack h="100%" gap={6}>
            <Stack direction="row">
              <Button w={20} onClick={() => setIsOpen(!isOpen)}>
                <AiOutlineCalendar />
              </Button>
              <Button w={20}>
                <BiTask />
              </Button>
            </Stack>
            <Stack hidden={!isOpen} bg="teal.500" borderRadius={4} p={6} color="blue.700" left="35%" position="absolute" zIndex={2}>
              <Fade in={isOpen} onBlur={() => setIsOpen(false)}>
                <Calendar onChange={onChange} value={value} />
              </Fade>
            </Stack>
            <Stack>
              <List selectedDay={value} />
            </Stack>
          </Stack>
        </Container>
      </>

      <Footer />
    </Stack>
  );
}

export default App;
