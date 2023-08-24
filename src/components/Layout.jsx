import * as React from "react";
import Header from "./Header";
import { Box } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Footer from "./Footer";

const Layout = ({ children, ...props }) => {
  return (
    <>
      <Header />
      <Box
        w="100%"
        minH="calc(100vh - 50px)"
        p="4"
        bg={useColorModeValue("gray.100", "gray.700")}
        {...props}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
