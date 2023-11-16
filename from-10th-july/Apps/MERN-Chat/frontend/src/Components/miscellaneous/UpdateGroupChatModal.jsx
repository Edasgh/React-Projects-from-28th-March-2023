import { ViewIcon } from "@chakra-ui/icons";
import {
  FormControl,
  IconButton,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import UserBadgeItem from "../UserAvatar/UserBadgeItem";
import ChatLoading from "../ChatLoading";
import UserListItem from "../UserAvatar/UserListItem";
import { ChatState } from "../../Context/ChatProvider";
import axios from "axios";

const UpdateGroupChatModal = ({
  fetchAgain,
  setFetchAgain,
  children,
  fetchMessages,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [loading, setLoading] = useState(false);
  const [renameLoading, setRenameLoading] = useState(false);

  const toast = useToast();

  const { user, Chats, setChats, selectedChat, setSelectedChat } = ChatState();
  const [groupChatNm, setGroupChatNm] = useState("");

  const [selectedUsers, setSelectedUsers] = useState([...selectedChat.users]);

  const [search, setSearch] = useState("");

  const [searchResult, setSearchResult] = useState([]);

  const handleAddUser = async (userToAdd) => {
    if (selectedChat.users.find((u) => u._id === userToAdd._id)) {
      toast({
        title: "User is already in the group",
        description: "error",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    setSelectedUsers([...selectedChat.users, userToAdd]);

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.put(
        `http://localhost:8080/api/chat/group_add`,
        { chatId: selectedChat._id, userId: userToAdd._id },
        config
      );

      setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error in updating Chat!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
    }
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

  const handleRenameGroupChat = async () => {
    if (groupChatNm === "" || !groupChatNm) {
      toast({
        title: "Please fill the name field",
        description: "name field's empty!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });

      return;
    }

    try {
      setRenameLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.put(
        `http://localhost:8080/api/chat/group_rename`,
        { chatId: selectedChat._id, chatName: groupChatNm },
        config
      );
      setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      setRenameLoading(false);

      setGroupChatNm("");
    } catch (error) {
      toast({
        title: "Error updating the group chat",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      setRenameLoading(false);
    }
  };

  const handleRemove = async (userToRemove) => {
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.put(
        `http://localhost:8080/api/chat/group_remove`,
        { chatId: selectedChat._id, userId: userToRemove._id },
        config
      );

      userToRemove._id === user._id ? setSelectedChat() : setSelectedChat(data);
      setSelectedUsers(
        selectedChat.users.filter((sel) => sel._id !== userToRemove._id)
      );
      setFetchAgain(!fetchAgain);
      fetchMessages();
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error in updating Chat!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <span onClick={onOpen}>{children}</span>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedChat.chatName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {selectedChat.groupAdmin._id === user._id ? (
              <>
                {selectedUsers.map((u) => (
                  <>
                    <UserBadgeItem
                      key={u._id}
                      user={u}
                      handleFunction={() => handleRemove(u)}
                    />
                  </>
                ))}
              </>
            ) : (
              <>
                {selectedUsers.map((u) => (
                  <>
                    <UserBadgeItem
                      key={u._id}
                      user={u}
                      cursorProp={"not-allowed"}
                      handleFunction={() => {
                        return;
                      }}
                    />
                  </>
                ))}
              </>
            )}
            <FormControl
              display="flex"
              justifyContent="space-between"
              gap="15px"
              mt={2}
            >
              <Input
                placeholder="Chat name"
                value={groupChatNm}
                onChange={(e) => setGroupChatNm(e.target.value)}
              />
              <Button
                variant="solid"
                colorScheme="teal"
                color="white"
                fontSize="sm"
                onClick={handleRenameGroupChat}
              >
                Update
              </Button>
            </FormControl>

            <FormControl mt={4} mb={4}>
              {selectedChat.groupAdmin._id === user._id ? (
                <>
                  <Input
                    placeholder="Add members"
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <Input
                    placeholder="Only Admins can add or remove members"
                    disabled
                  />
                </>
              )}
            </FormControl>

            {loading ? (
              <>
                <ChatLoading />
              </>
            ) : (
              searchResult.map((usr) => (
                <UserListItem
                  key={usr._id}
                  user={usr}
                  handleFunction={() => handleAddUser(usr)}
                />
              ))
            )}
            {loading && <Spinner ml="auto" display="flex" />}
          </ModalBody>

          <ModalFooter display="flex" gap="10px">
            <Button
              colorScheme="red"
              color="white"
              onClick={() => handleRemove(user)}
            >
              Leave Group
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateGroupChatModal;
