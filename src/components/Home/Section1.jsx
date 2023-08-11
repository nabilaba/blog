import * as React from "react";
import { Link } from "gatsby-link";
import { Box, Grid, HStack, Stack, Text } from "@chakra-ui/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Section1 = ({ posts }) => {
  if (!posts) return null;
  if (!Array.isArray(posts)) return null;

  const postsList = posts?.map((post, i) => {
    return (
      <Box
        as={Link}
        to={`/${post.slug}`}
        key={i}
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
      >
        <GatsbyImage
          image={getImage(post.heroImage)}
          alt={post.title}
          className="img"
          style={{
            transition: "transform 0.5s ease",
            objectFit: "cover",
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
          fontSize="md"
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
            {post.title}
          </Text>
          <Stack>
            <Text fontSize="80%" color="gray.400">
              {post.publishDate}
            </Text>
          </Stack>
          <HStack spacing="1" mt="1">
            {post.tags?.map((tag, i) => (
              <Text
                key={i}
                fontSize="80%"
                bg="red.600"
                px="1"
                rounded="sm"
                w="fit-content"
              >
                {tag}
              </Text>
            ))}
          </HStack>
        </Box>
      </Box>
    );
  });

  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={2}
      >
        {postsList}
      </Grid>
    </>
  );
};

export default Section1;
