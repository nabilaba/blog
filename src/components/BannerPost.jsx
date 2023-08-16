import React from "react";
import { Box, HStack, Text } from "@chakra-ui/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby-link";
import { TimeIcon } from "@chakra-ui/icons";
import { TimeAgo } from "../utils";

const BannerPost = ({ post, ...props }) => {
  return (
    <Box
      as={Link}
      to={`/${post?.slug}`}
      pos="relative"
      w="100%"
      h="250px"
      rounded="xl"
      overflow="hidden"
      _hover={{
        ".img": {
          transform: "scale(1.1)",
        },
      }}
      {...props}
    >
      <GatsbyImage
        image={getImage(post?.heroImage)}
        alt={post?.title}
        className="img"
        imgStyle={{
          objectFit: "cover",
          objectPosition: "top",
        }}
        style={{
          transition: "transform 0.5s ease",
          width: "100%",
          height: "100%",
        }}
      />
      <Box
        pos="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(to-t, blackAlpha.900 20%, transparent)"
      />
      <Box
        pos="absolute"
        bottom="0"
        left="0"
        right="0"
        p="2"
        fontSize="xl"
        color="white"
      >
        <Text
          fontSize="90%"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {post?.title}
        </Text>
        <HStack fontSize="60%" color="gray.400" spacing="1">
          <TimeIcon />
          <Text>{TimeAgo(post?.updatedAt)}</Text>
        </HStack>
        <HStack spacing="1" mt="1">
          {post?.tags?.map((tag, i) => (
            <Text
              key={i}
              fontSize="60%"
              bg="red.600"
              px="1"
              rounded="sm"
              w="fit-content"
            >
              {tag?.name}
            </Text>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default BannerPost;
