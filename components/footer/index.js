import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box w="100%" paddingY={2} marginTop="0px !important" bg="gray.600" textAlign="center">
      <Text fontSize={14}>Created by Matias Sanchez 2022 ©</Text>
    </Box>
  );
}

export default Footer;
