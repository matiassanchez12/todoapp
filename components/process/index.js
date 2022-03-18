import React from "react";
import Item from "../Item";
import { Stack, Button, Grid, Heading, GridItem } from "@chakra-ui/react";
import { Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

function Process({ listProcess, setListProcess, selectedDay }) {
  return (
    <Stack flex={1} gap={2}>
      <Heading size="md">En proceso</Heading>
      <Droppable droppableId="ProcessList">
        {(provided) => (
          <Grid bg="gray.700" p={3} maxW={400} ref={provided.innerRef} {...provided.droppableProps} {...provided.dragHandleProps}>
            {listProcess
              .filter((item) => item.day === selectedDay)
              .map((item, index) => (
                <Item
                  item={item}
                  handleEdit={(e) =>
                    setListProcess((todos) =>
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
                    setListProcess((todos) => todos.filter((todo) => todo !== item));
                    localStorage.removeItem(item.id);
                  }}
                  colorBg="orange.500"
                  key={index}
                  index={index}
                />
              ))}
            {provided.placeholder}
            <GridItem>
              <Button
                w="100%"
                variant="outline"
                color="gray.400"
                onClick={() => {
                  let newTodo = {
                    id: uuidv4(),
                    task: "",
                    day: selectedDay,
                    state: "process",
                  };
                  setListProcess((todos) => todos.concat(newTodo));
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

export default Process;
