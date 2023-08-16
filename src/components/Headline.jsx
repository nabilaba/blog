import React from "react";
import BannerPost from "./BannerPost";
import { Text, Stack } from "@chakra-ui/layout";

const Headline = ({ post }) => {
  return (
    <Stack position="relative" overflow="hidden">
      <BannerPost post={post} h={{ base: "250px", md: "300px" }} />
      <Text
        position="absolute"
        top="0"
        left="0"
        mt="10px"
        bg="red.600"
        px="2"
        fontWeight="bold"
        fontStyle="italic"
        fontSize="xl"
        color="white"
      >
        HEADLINE
      </Text>
    </Stack>
  );
};

export default Headline;
