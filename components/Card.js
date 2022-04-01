import React from "react";
import { GridItem, Input, Stack, Text } from "@chakra-ui/react";
import { FaTrashAlt, FaEdit, FaSave } from "react-icons/fa";

function Card({ card, editCard, removeCard }) {
  const [openInput, setOpenInput] = React.useState(false);

  return (
    <GridItem bg="blue.500" textAlign="start" minH={130} borderRadius={5}>
      {openInput ? (
        <Stack h="100%" p={1}>
          <Stack p={1} alignItems="center">
            <button onClick={() => setOpenInput(false)}>
              <FaSave size={14} />
            </button>
          </Stack>
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
            <Stack direction="row" gap={6} p={1} justifyContent="center" alignItems="center">
              <button onClick={() => removeCard(card.id)}>
                <FaTrashAlt size={14} />
              </button>
              <button
                onClick={() => {
                  setOpenInput(true);
                }}
              >
                <FaEdit size={14} />
              </button>
            </Stack>
            <Stack w="100%" textAlign="center">
              <Text p={0} mt={"0"} letterSpacing={2} fontWeight={500}>
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
    </GridItem>
  );
}

export default Card;
