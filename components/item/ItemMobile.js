import React from "react";
import { Button, GridItem, Input, Stack, Text } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";

function ItemMobile() {
  return (
    <GridItem
      bg={colorBg}
      borderRadius={4}
      transition="0.3s"
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
          p={2}
          paddingInline={5}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          onDoubleClickCapture={() => setOpenInput(true)}
        >
          <Text w={200}>{item.task}</Text>
          <Button variant="ghost" onClick={handleDelete}>
            <FaTrashAlt size={14} />
          </Button>
        </Stack>
      )}
    </GridItem>
  );
}

export default ItemMobile;
