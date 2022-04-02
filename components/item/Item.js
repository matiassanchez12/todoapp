import React from "react";
import { Button, GridItem, Input, Stack, Text } from "@chakra-ui/react";
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
            <Input type="text" value={item.task} onChange={handleEdit} onDoubleClickCapture={() => setOpenInput(true)} />
          ) : (
            <Stack
              minH="40px"
              paddingInline={5}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              onDoubleClickCapture={() => setOpenInput(true)}
            >
              <Text w={200} textAlign="start">
                {item.task}
              </Text>
              <Stack>
                <Button variant="ghost" onClick={handleDelete}>
                  <FaTrashAlt size={14} />
                </Button>
              </Stack>
            </Stack>
          )}
        </GridItem>
      )}
    </Draggable>
  );
}

export default Item;
