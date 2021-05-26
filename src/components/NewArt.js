import React from 'react';
import {
  Box,
  Image,
  Button,
  Icon,
  Modal,
  ModalOverlay,
  HStack,
  ModalContent,
  ModalHeader,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { FaEnvelope, FaFacebookSquare, FaPhoneAlt } from 'react-icons/fa';

export default function NewArt(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  return (
    <Box w="300px">
      <Image h="200px" w="300px" src={props.image}></Image>
      <Box padding="2px 0px 8px" justifyContent="space-between" d="flex">
        <Box fontWeight="600" as="span">
          Artist: BAA RUU WAA
        </Box>
        <Box fontSize="0.9rem" color="tomato" as="span">
          {props.year}
        </Box>
      </Box>
      <Box mt="-5px" fontSize="0.9rem">
        Title: {props.title}
      </Box>
      <Box mt="-5px" fontSize="0.9rem">
        Medium: {props.medium}
      </Box>
      <Box mt="-5px" fontSize="0.9rem">
        Dimension: {props.dimension}
      </Box>
      <Box mt="-5px" fontSize="0.9rem">
        Year: {props.year}
      </Box>
      <Button onClick={() => setIsOpen(true)} size="xs" colorScheme="blue">
        Private Message
      </Button>
      <AlertDialog
        size="xs"
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay isCentered>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              contact the artist
            </AlertDialogHeader>

            <AlertDialogBody>
              <HStack>
                <a href="mailto:akinbaruwa@gmail.com">
                  <Icon h="25px" w="25px" as={FaEnvelope} />
                </a>
                <a href="mailto:akinbaruwa@gmail.com">
                  <Icon h="25px" w="25px" as={FaFacebookSquare} />
                </a>
                <a href="tel:+2347069654353">
                  <Icon h="23px" w="23px" as={FaPhoneAlt} />
                </a>
              </HStack>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}
