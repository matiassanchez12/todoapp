import React from "react";
import { Box, Button, GridItem, Input, Stack, Text } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";
import { FaTrashAlt, FaCheck } from "react-icons/fa";

function Item({ item, handleEdit, handleDelete, colorBg, index }) {
  const [openInput, setOpenInput] = React.useState(false);

  const getItemStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle,
  });

  return (
    <Draggable key={item.id.toString()} draggableId={item.id.toString()} index={index}>
      {(provided, snapshot) => (
        <GridItem
          bg={colorBg}
          borderRadius={4}
          transition="0.3s"
          p={1}
          mb={3}
          maxW={300}
          _hover={{ transform: "scale(1.03)" }}
          onBlur={() => setOpenInput(false)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
        >
          {openInput ? (
            <Stack direction="row">
              <Input
                outline="none"
                type="text"
                value={item.task}
                onChange={handleEdit}
                onDoubleClickCapture={() => setOpenInput(true)}
              />
              <Button display="block" variant="ghost" onClick={() => setOpenInput(false)}>
                <FaCheck size={14} />
              </Button>
            </Stack>
          ) : (
            <Stack
              minH="40px"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              onDoubleClickCapture={() => setOpenInput(true)}
            >
              <Text paddingInline={4} w={240} textAlign="start">
                {item.task}
              </Text>
              <Button variant="ghost" onClick={handleDelete}>
                <FaTrashAlt size={14} />
              </Button>
            </Stack>
          )}
        </GridItem>
      )}
    </Draggable>
  );
}

export default Item;
