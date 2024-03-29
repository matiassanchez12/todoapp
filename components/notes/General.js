import React, { useState } from "react";
import { Box, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Card from "../Card";
import { v4 as uuidv4 } from "uuid";

function GeneralNotes({ selectedDay, listCards, setListCards }) {
  const [generalNotes, setgeneralNotes] = useState([]);

  React.useEffect(() => {
    const local = localStorage;
    for (const key in local) {
      const item = JSON.parse(localStorage.getItem(key));
      if (item && item.type) {
        setgeneralNotes((todos) => todos.concat(item));
      }
    }
  }, []);

  const handleAdd = () => {
    const newItem = {
      id: uuidv4(),
      title: "Titulo",
      content: "",
      type: "day",
      day: selectedDay.toLocaleString().split(",")[0],
    };
    localStorage.setItem(newItem.id, JSON.stringify(newItem));
    setListCards((cards) => cards.concat(newItem));
    setgeneralNotes((cards) => cards.concat(newItem));
  };

  const handleEdit = (editCard) => {
    localStorage.setItem(editCard.id, JSON.stringify(editCard));
    setListCards((cards) => cards.map((card) => (card.id === editCard.id ? editCard : card)));
    setgeneralNotes((cards) => cards.map((card) => (card.id === editCard.id ? editCard : card)));
  };

  const handleRemove = (idCard) => {
    localStorage.removeItem(idCard);
    setListCards((cards) => cards.filter((card) => card.id !== idCard));
    setgeneralNotes((cards) => cards.filter((card) => card.id !== idCard));
  };

  return (
    <Box maxW="100%" h="100%">
      <Grid
        templateColumns="repeat(auto-fit, 200px)"
        justifyContent={{ base: "center", md: "start" }}
        rowGap={6}
        columnGap={6}
      >
        {generalNotes.length > 0 &&
          generalNotes.map((card, index) => (
            <Card key={index} card={card} editCard={handleEdit} removeCard={handleRemove} />
          ))}
        <GridItem
          bg="gray.600"
          transition="all .5s ease-in-out"
          align="center"
          cursor="pointer"
          _hover={{ bg: "gray.500" }}
          borderRadius={5}
          h={130}
          maxH={130}
        >
          <Stack justifyContent="center" alignItems="center" h="100%" gap={3} onClick={handleAdd}>
            <Text fontWeight={500}>Crear nueva tarjeta</Text>
            <AiOutlinePlusCircle size={26} />
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default GeneralNotes;
