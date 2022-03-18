import React, { useEffect } from "react";
import Todo from "../todo";
import Process from "../process";
import Done from "../done";
import { DragDropContext } from "react-beautiful-dnd";
import { Stack } from "@chakra-ui/react";

function List({ selectedDay }) {
  const [listTodo, setListTodo] = React.useState([]);
  const [listProcess, setListProcess] = React.useState([]);
  const [listDone, setListDone] = React.useState([]);

  useEffect(() => {
    const local = localStorage;
    for (const key in local) {
      const item = JSON.parse(localStorage.getItem(key));
      if (item) {
        if (item.state === "todo") {
          setListTodo((todos) => todos.concat(item));
        } else if (item.state === "process") {
          setListProcess((todos) => todos.concat(item));
        } else {
          setListDone((todos) => todos.concat(item));
        }
      }
    }
  }, []);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    let add,
      process = listProcess,
      done = listDone,
      todos = listTodo;

    if (source.droppableId === "TodosList") {
      add = todos[source.index];
      todos.splice(source.index, 1);
    } else if (source.droppableId === "ProcessList") {
      add = process[source.index];
      process.splice(source.index, 1);
    } else {
      add = done[source.index];
      done.splice(source.index, 1);
    }

    if (destination.droppableId === "TodosList") {
      todos.splice(destination.index, 0, { ...add, status: "todo" });
      localStorage.setItem(add.id, JSON.stringify({ ...add, state: "todo" }));
    } else if (destination.droppableId === "ProcessList") {
      process.splice(destination.index, 0, { ...add, status: "process" });
      localStorage.setItem(add.id, JSON.stringify({ ...add, state: "process" }));
    } else {
      done.splice(destination.index, 0, { ...add, status: "done" });
      localStorage.setItem(add.id, JSON.stringify({ ...add, state: "done" }));
    }
  };
  console.log();
  return (
    process.browser && (
      <DragDropContext onDragEnd={onDragEnd}>
        <Stack direction="row" gap={4}>
          <Todo listTodo={listTodo} setListTodo={setListTodo} selectedDay={selectedDay.toLocaleString().split(",")[0]} />
          <Process
            listProcess={listProcess}
            setListProcess={setListProcess}
            selectedDay={selectedDay.toLocaleString().split(",")[0]}
          />
          <Done listDone={listDone} setListDone={setListDone} selectedDay={selectedDay.toLocaleString().split(",")[0]} />
        </Stack>
      </DragDropContext>
    )
  );
}

export default List;
