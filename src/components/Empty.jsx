import React from "react";
import { Stack, Text } from "@chakra-ui/layout";

const Empty = ({ message }) => {
  return (
    <Stack>
      <Text>{message || "Tidak ada post yang ditampilkan."}</Text>
    </Stack>
  );
};

export default Empty;
