import React from "react";
import { Box, Stack, Tab, TabList, TabPanel, TabPanels, Tabs as TabsChakra } from "@chakra-ui/react";
import List from "../list";
import Calendar from "../calendar";
import GeneralNotes from "../notes/General";
import DailyNotes from "../notes";

function Tabs() {
  const [listCards, setListCards] = React.useState([]);
  const [value, onChange] = React.useState(new Date());

  React.useEffect(() => onChange(new Date()), []);

  return (
    <Box w="100%" flex={1} marginTop="0px !important" bg="blue.800">
      <Stack flexFlow="row wrap" flexDirection="row" justifyContent="center" gap={4} alignItems="start" w="100%">
        <Stack p={4} flex={1} w="100%" h="100%" alignItems="center" justifyContent="center">
          <Calendar value={value} onChange={onChange} />
        </Stack>
        <TabsChakra
          p={5}
          variant="solid-rounded"
          w="100%"
          minH={480}
          align="center"
          display="flex"
          flex={2}
          flexDirection="column"
          gap={6}
        >
          <TabList>
            <Tab>TAREAS</Tab>
            <Tab>NOTAS DEL DIA</Tab>
            <Tab>NOTAS GENERALES</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <List selectedDay={value} />
            </TabPanel>
            <TabPanel>
              <DailyNotes selectedDay={value} listCards={listCards} setListCards={setListCards} />
            </TabPanel>
            <TabPanel>
              <GeneralNotes selectedDay={value} listCards={listCards} setListCards={setListCards} />
            </TabPanel>
          </TabPanels>
        </TabsChakra>
      </Stack>
    </Box>
  );
}

export default Tabs;
