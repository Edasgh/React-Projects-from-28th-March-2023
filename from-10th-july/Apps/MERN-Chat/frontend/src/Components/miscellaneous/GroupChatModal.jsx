import React, { useState } from "react";

import {
  Box,
  Button,
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
  Spinner,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { ChatState } from "../../Context/ChatProvider";
import axios from "axios";
import ChatLoading from "../ChatLoading";
import UserListItem from "../UserAvatar/UserListItem";
import UserBadgeItem from "../UserAvatar/UserBadgeItem";

const GroupChatModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [groupChatNm, setGroupChatNm] = useState("");

  const [selectedUsers, setSelectedUsers] = useState([]);

  const [search, setSearch] = useState("");

  const [searchResult, setSearchResult] = useState([]);

  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const { user, Chats, setChats } = ChatState();

  const handleGroup = (userToAdd) => {
    if (selectedUsers.includes(userToAdd)) {
      toast({
        title: "User already added",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    setSelectedUsers([...selectedUsers, userToAdd]);
    console.log([...selectedUsers, userToAdd]);
  };

  const handleSearch = async (query) => {
    setSearch(query);
    if (!query) {
      return;
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(
        `http://localhost:8080/api/user?search=${search}`,
        config
      );
      console.log("Searched data :", data);
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (groupChatNm === "" || selectedUsers.length === 0) {
      toast({
        title: "Please fill all the fields!",
        description: "fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });

      return;
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.post(
        `http://localhost:8080/api/chat/group`,
        {
          name: groupChatNm,
          users: JSON.stringify(selectedUsers.map((u) => u._id)),
        },
        config
      );

      setChats([data, ...Chats]);
      console.log([data, ...Chats]);

      onClose();

      toast({
        title: "New Group Chat Created",
        description: "success",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    } catch (error) {
      toast({
        title: "Failed to create the chat",
        description: error.response.data,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const handleDelete = (delUser) => {
    setSelectedUsers(selectedUsers.filter((sel) => sel._id !== delUser._id));
  };

  return (
    <>
      <span onClick={onOpen}>{children}</span>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a New Group Chat</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                placeholder="Chat name"
                onChange={(e) => setGroupChatNm(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4} mb={4}>
              <Input
                placeholder="Add users: eg. Jane, John, Sofia"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </FormControl>
            {selectedUsers.map((u) => (
              <>
                <UserBadgeItem
                  key={u._id}
                  user={u}
                  handleFunction={() => handleDelete(u)}
                />
              </>
            ))}

            {loading ? (
              <>
                <ChatLoading />
              </>
            ) : (
              searchResult.map((usr) => (
                <UserListItem
                  key={usr._id}
                  user={usr}
                  handleFunction={() => handleGroup(usr)}
                />
              ))
            )}
            {loading && <Spinner ml="auto" display="flex" />}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Create Group Chat
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GroupChatModal;
