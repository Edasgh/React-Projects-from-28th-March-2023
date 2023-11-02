import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const showOrHidePW = () => {
    setShow(show === false ? true : false);
  };

  function submitHandler() {}

  return (
    <>
      <VStack spacing="5px">
        <FormControl id="user-email" isRequired>
          <FormLabel>Email Address</FormLabel>

          <Input
            placeholder="Enter Your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>
        <FormControl id="user-password" isRequired>
          <FormLabel>Password</FormLabel>

          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={showOrHidePW}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
        >
          Login
        </Button>
        <Button
          colorScheme="red"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
        >
          Get guest user credentials
        </Button>
      </VStack>
    </>
  );
};

export default Login;
