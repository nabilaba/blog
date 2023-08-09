import * as React from "react";

import Header from "./Header";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box as="main" w="100%" minH="100vh" p="4">
        {children}
      </Box>
    </>
  );
};

export default Layout;
