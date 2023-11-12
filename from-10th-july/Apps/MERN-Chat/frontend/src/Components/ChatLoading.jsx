import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const ChatLoading = () => {
  return (
    <>
      <Stack>
        <Skeleton height="38px" />
        <Skeleton height="38px" />
        <Skeleton height="38px" />
        <Skeleton height="38px" />
        <Skeleton height="38px" />
        <Skeleton height="38px" />
        <Skeleton height="38px" />
        <Skeleton height="38px" />
        <Skeleton height="38px" />
        <Skeleton height="38px" />
        <Skeleton height="38px" />
        <Skeleton height="38px" />
      </Stack>
    </>
  );
};

export default ChatLoading;
