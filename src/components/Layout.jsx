import * as React from "react";

import Header from "./Header";
import { Box, useColorModeValue } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box
        as="main"
        w="100%"
        minH="calc(100vh - 50px)"
        p="4"
        bg={useColorModeValue("gray.100", "gray.700")}
        mt="50px"
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
