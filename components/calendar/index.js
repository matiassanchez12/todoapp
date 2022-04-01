import { Button, Box, Stack } from "@chakra-ui/react";
import React from "react";
import { Calendar as CalendarReact } from "react-calendar";

function Calendar({ onChange, value }) {
  return (
    <Stack alignItems="center" width={400} maxW="100%" p={6}>
      <Box
        as={CalendarReact}
        onChange={onChange}
        value={value}
        color="white"
        p={4}
        textDecoration="none !important"
        sx={{
          "& abbr": {
            textDecoration: "none !important",
          },
          "&.react-calendar__tile react-calendar__month-view__days__day:hover": {
            backgroundColor: "black",
          },
        }}
        borderRadius={6}
        backgroundColor="transparent"
      />
    </Stack>
  );
}

export default Calendar;
