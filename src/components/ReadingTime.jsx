import React from "react";
import { Text } from "@chakra-ui/layout";
import readingTime from "reading-time";

const ReadingTime = ({ text }) => {
  const { minutes } = readingTime(text);

  return (
    <Text>
      {minutes} menit baca
    </Text>
  );
};

export default ReadingTime;
