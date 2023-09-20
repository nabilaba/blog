import React from "react";
import { Stack, Text } from "@chakra-ui/layout";

const EmptyPost = ({ message }) => {
  return (
    <Stack>
      <Text>{message || "Tidak ada post yang ditampilkan."}</Text>
    </Stack>
  );
};

export default EmptyPost;
