import React from "react";
import { Button, GridItem, Input, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { FaTrashAlt, FaEdit, FaCheck } from "react-icons/fa";
import Modal from "./card/Modal";

function Card({ card, editCard, removeCard }) {
  const [openInput, setOpenInput] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <GridItem
      bg="blue.500"
      textAlign="start"
      minH={130}
      cursor="pointer"
      borderRadius={5}
      onClick={onOpen}
      transition="all .3s ease-in-out"
      _hover={{ bg: "blue.400" }}
    >
      {openInput ? (
        <Stack h="100%">
          <Button onClick={() => setOpenInput(false)}>
            <FaCheck size={14} />
          </Button>
          <Stack h="100%">
            <Input
              type="text"
              value={card.title}
              flex={1}
              borderRadius="0px"
              onChange={(e) => editCard({ ...card, title: e.target.value })}
              autoFocus
            />
            <Input
              type="text"
              value={card.content}
              flex={2}
              borderTopLeftRadius="0px"
              borderTopRightRadius="0px"
              marginTop="0px !important"
              onChange={(e) => editCard({ ...card, content: e.target.value })}
            />
          </Stack>
        </Stack>
      ) : (
        <Stack h="100%">
          <Stack p={1} alignItems="center">
            <Stack w="100%" textAlign="center">
              <Text p={0} letterSpacing={2} fontWeight={500}>
                {card.title}
              </Text>
            </Stack>
          </Stack>
          <hr></hr>
          <Stack>
            <Text p={2} fontSize={14} letterSpacing={1.5} lineHeight={6}>
              {card.content}
            </Text>
          </Stack>
        </Stack>
      )}
      <Modal isOpen={isOpen} onClose={onClose} editCard={editCard} card={card} removeCard={removeCard} />
    </GridItem>
  );
}

export default Card;
