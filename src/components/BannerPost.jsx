import React from "react";
import { Box, HStack, Text } from "@chakra-ui/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby-link";
import { TimeIcon } from "@chakra-ui/icons";
import { TimeAgo } from "../utils";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import CustomLink from "./CustomLink";
import ReadingTime from "./ReadingTime";

const BannerPost = ({ post, ...props }) => {
  const plainTextBody = documentToPlainTextString(JSON.parse(post?.body?.raw));
  return (
    <Box w="100%" rounded="xl" {...props}>
      <Box w="100%" h="250px">
        <GatsbyImage
          image={getImage(post?.heroImage)}
          alt={post?.title}
          imgStyle={{
            objectFit: "cover",
            objectPosition: "top",
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Box py="2" fontSize="xl">
        <HStack fontSize="13px" color="gray.500" justifyContent="space-between">
          <HStack spacing="1">
            <TimeIcon />
            <Text>{TimeAgo(post?.updatedAt)}</Text>
          </HStack>
          <ReadingTime text={plainTextBody} />
        </HStack>
        <CustomLink
          to={`/posts/${post?.slug}`}
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
        </CustomLink>
        <Text
          fontSize="14px"
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
          {documentToPlainTextString(JSON.parse(post?.description?.raw))}
        </Text>
        <Text fontSize="14px" color="gray.500" textAlign="justify">
          Tags:{" "}
          {post &&
            post?.tags?.map((tag, i) =>
              (
                <Text
                  key={i}
                  as={Link}
                  // replace uppercase to dash and lowercase except first letter
                  to={`/tags/${tag?.name
                    .replace(/([A-Z])/g, "-$1")
                    .toLowerCase()
                    .replace(/(^-)/g, "")}`}
                  textDecor="underline"
                >
                  {tag?.name}
                </Text>
              )).reduce((prev, curr) => [prev, ", ", curr])
            }
        </Text>
      </Box>
    </Box>
  );
};

export default BannerPost;
