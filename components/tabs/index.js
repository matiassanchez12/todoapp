import React from "react";
import { Stack, Tab, TabList, TabPanel, TabPanels, Tabs as TabsChakra } from "@chakra-ui/react";
import List from "../list";
import Calendar from "../calendar";
import GeneralNotes from "../notes/General";
import DailyNotes from "../notes";

function Tabs() {
  const [listCards, setListCards] = React.useState([]);
  const [value, onChange] = React.useState(new Date());

  React.useEffect(() => onChange(new Date()), []);

  return (
    <Stack
      flexDirection="row"
      flexFlow="row wrap"
      bg="blue.800"
      justifyContent="center"
      gap={4}
      paddingInline={6}
      flex={1}
      alignItems="start"
      marginTop="0px !important"
    >
      <Stack p={4} flex={1} h="100%" alignItems="center" justifyContent="center">
        <Calendar value={value} onChange={onChange} />
      </Stack>
      <TabsChakra p={5} variant="solid-rounded" align="center" as={Stack} flex={2} flexDirection="column" gap={10}>
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
  );
}

export default Tabs;
