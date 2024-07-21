import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Radio,
    RadioGroup,
    Textarea,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";

const CreateUserModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <Button onClick={onOpen}>
        <BiAddToQueue size={20} />
    </Button>
    <Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<form>
					<ModalContent>
						<ModalHeader> My new BFF 😍 </ModalHeader>
						<ModalCloseButton />

						<ModalBody pb={6}>

						</ModalBody>

						<ModalFooter>
							<Button colorScheme='blue' mr={3} type='submit'>
								Add
							</Button>
							<Button onClick={onClose}>Cancel</Button>
						</ModalFooter>
					</ModalContent>
				</form>
			</Modal>
    </>
  )
}

export default CreateUserModal
