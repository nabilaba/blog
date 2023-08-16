import React from "react";
import { Box, HStack, Text } from "@chakra-ui/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby-link";
import { TimeIcon } from "@chakra-ui/icons";
import { TimeAgo } from "../utils";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

const BannerPost = ({ post, ...props }) => {
  return (
    <Box
      as={Link}
      to={`/${post?.slug}`}
      w="100%"
      rounded="xl"
      overflow="hidden"
      _hover={{
        ".img": {
          transform: "scale(1.1)",
        },
      }}
      {...props}
    >
      <Box w="100%" h="250px" rounded="xl" overflow="hidden">
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
      </Box>
      <Box p="2" fontSize="xl">
        <HStack fontSize="60%" color="gray.500" spacing="1">
          <TimeIcon />
          <Text>{TimeAgo(post?.updatedAt)}</Text>
        </HStack>
        <Text
          fontWeight="bold"
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
        <Text
          fontSize="sm"
          color="gray.500"
          textAlign="justify"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {documentToPlainTextString(JSON.parse(post?.description.raw))}
        </Text>
        <Text fontSize="sm" color="gray.500" textAlign="justify">
          Tags:{" "}
          {post?.tags.map((tag, i) => (
            <Text
              key={i}
              as={Link}
              to={`/tags/${tag?.name}`}
              textDecor="underline"
            >
              {tag?.name}
            </Text>
          ))}
        </Text>
      </Box>
    </Box>
  );
};

export default BannerPost;
