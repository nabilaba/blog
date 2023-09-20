import React from "react";
import { Stack, Text } from "@chakra-ui/layout";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const Footer = () => {
  const { description } = useSiteMetadata();
  return (
    <Stack align="center" justify="center" h="100px" spacing="0">
      <Text
        fontWeight="extrabold"
        fontStyle="italic"
        fontSize="xl"
        letterSpacing="wider"
      >
        NabilBlog.
      </Text>
      <Text fontSize="sm">{description}</Text>
      <Text fontSize="sm" mt="2">
        © {new Date().getFullYear()} NabilBlog. All rights reserved.
      </Text>
    </Stack>
  );
};

export default Footer;
