import React from "react";
import { Link } from "gatsby";
import { Text } from "@chakra-ui/layout";

export default function CustomLink(props) {
  return (
    <Text
      as={Link}
      to={props.to}
      _after={{
        content: '""',
        display: "block",
        w: "100%",
        h: "1px",
        bg: "gray.600",
        transform: "scaleX(0)",
        transformOrigin: "right",
        transition: "transform 0.4s cubic-bezier(0.86, 0, 0.07, 1)",
      }}
      _hover={{
        _after: {
          transform: "scaleX(1)",
          transformOrigin: "left",
        },
      }}
      {...props}
    >
      {props.children}
    </Text>
  );
}
