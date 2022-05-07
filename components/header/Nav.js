import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";

function Nav() {
  return (
    <Box w="100%" bg="gray.600">
      <Stack p={3}>
        <Heading size="md">Calendario de tareas</Heading>
      </Stack>
    </Box>
  );
}

export default Nav;
