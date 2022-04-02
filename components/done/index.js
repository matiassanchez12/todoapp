import React from "react";
import Item from "../item/Item";
import { Stack, Button, Grid, Heading, GridItem } from "@chakra-ui/react";
import { Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import { FcCheckmark } from "react-icons/fc";

function Done({ listDone, setListDone, selectedDay }) {
  return (
    <Stack gap={2}>
      <Stack direction="row" alignItems="center">
        <Heading size="md">Hecho</Heading>
        <FcCheckmark size={26} />
      </Stack>
      <Droppable droppableId="DoneList">
        {(provided) => (
          <Grid p={3} minW={318} maxW={400} ref={provided.innerRef} {...provided.droppableProps} {...provided.dragHandleProps}>
            {listDone
              .filter((item) => item.day === selectedDay)
              .map((item, index) => (
                <Item
                  item={item}
                  handleEdit={(e) =>
                    setListDone((todos) =>
                      todos.map((todo) => {
                        if (todo === item) {
                          const newItem = { ...item, task: e.target.value };
                          localStorage.setItem(item.id, JSON.stringify(newItem));
                          return newItem;
                        }
                        return todo;
                      })
                    )
                  }
                  handleDelete={() => {
                    setListDone((todos) => todos.filter((todo) => todo !== item));
                    localStorage.removeItem(item.id);
                  }}
                  colorBg="green.600"
                  key={index}
                  index={index}
                />
              ))}
            {provided.placeholder}
            <GridItem>
              <Button
                w="100%"
                variant="outline"
                color="gray.200"
                onClick={() => {
                  let newTodo = {
                    id: uuidv4(),
                    task: "",
                    day: selectedDay,
                    state: "done",
                  };
                  setListDone((todos) => todos.concat(newTodo));
                  localStorage.setItem(newTodo.id, JSON.stringify(newTodo));
                }}
              >
                + Agregar tarjeta
              </Button>
            </GridItem>
          </Grid>
        )}
      </Droppable>
      )
    </Stack>
  );
}

export default Done;
