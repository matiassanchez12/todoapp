import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Modal as ModalChakra,
  FormLabel,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

function Modal({ isOpen, onClose, editCard, card, removeCard }) {
  const [title, setTitle] = React.useState(card.title);
  const [content, setContent] = React.useState(card.content);

  const handleSave = () => {
    editCard({ ...card, title: title, content: content });
    onClose();
  };

  const handleRemove = () => {
    removeCard(card.id);
    onClose();
  };

  return (
    <>
      <ModalChakra isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <FormLabel>Titulo</FormLabel>
              <textarea
                name="Text1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                  resize: "none",
                  backgroundColor: "transparent",
                  color: "white",
                  outline: "none",
                  border: "1px solid gray",
                  padding: "5px",
                  borderRadius: "5px",
                  overflow: "hidden",
                  minHeight: "20px",
                  maxHeight: "50px",
                }}
              ></textarea>
            </Stack>
            <Stack mt={5}>
              <textarea
                name="Text2"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{
                  resize: "none",
                  backgroundColor: "transparent",
                  color: "white",
                  outline: "none",
                  border: "1px solid gray",
                  padding: "5px",
                  borderRadius: "5px",
                  overflow: "hidden",
                  minHeight: "100px",
                  maxHeight: "120px",
                }}
              ></textarea>
            </Stack>
          </ModalBody>
          <ModalFooter display="flex" justifyContent="space-between">
            <Button colorScheme="red" onClick={handleRemove}>
              <FaTrash />
            </Button>
            <Stack direction="row">
              <Button colorScheme="cyan" onClick={handleSave}>
                <FaCheck />
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </ModalChakra>
    </>
  );
}

export default Modal;
