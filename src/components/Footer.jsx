import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const Footer = () => {
  const { description } = useSiteMetadata();
  return (
    <Box align="center" justify="center" p="4">
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
    </Box>
  );
};

export default Footer;
