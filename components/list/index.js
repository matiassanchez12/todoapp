import React, { useEffect } from "react";
import Todo from "../todo";
import Done from "../done";
import { DragDropContext } from "react-beautiful-dnd";
import { Stack } from "@chakra-ui/react";

function List({ selectedDay }) {
  const [listTodo, setListTodo] = React.useState([]);
  const [listDone, setListDone] = React.useState([]);

  useEffect(() => {
    const local = localStorage;
    setListDone([]);
    setListTodo([]);
    for (const key in local) {
      const item = JSON.parse(localStorage.getItem(key));
      if (item && item.state && item.day === selectedDay.toLocaleString().split(",")[0]) {
        if (item.state === "todo") {
          setListTodo((todos) => todos.concat(item));
        } else {
          setListDone((todos) => todos.concat(item));
        }
      }
    }
  }, [selectedDay]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    let add,
      done = listDone,
      todos = listTodo;

    if (source.droppableId === "TodosList") {
      add = todos[source.index];
      todos.splice(source.index, 1);
    } else {
      add = done[source.index];
      done.splice(source.index, 1);
    }

    if (destination.droppableId === "TodosList") {
      todos.splice(destination.index, 0, { ...add, status: "todo" });
      localStorage.setItem(add.id, JSON.stringify({ ...add, state: "todo" }));
    } else {
      done.splice(destination.index, 0, { ...add, status: "done" });
      localStorage.setItem(add.id, JSON.stringify({ ...add, state: "done" }));
    }
  };

  return (
    process.browser && (
      <DragDropContext onDragEnd={onDragEnd}>
        <Stack direction="row" flexFlow="row wrap" justifyContent="center" gap={4}>
          <Todo
            listTodo={listTodo}
            setListTodo={setListTodo}
            selectedDay={selectedDay.toLocaleString().split(",")[0]}
          />
          <Done
            listDone={listDone}
            setListDone={setListDone}
            selectedDay={selectedDay.toLocaleString().split(",")[0]}
          />
        </Stack>
      </DragDropContext>
    )
  );
}

export default List;
