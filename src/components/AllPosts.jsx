import React from "react";
import { Box, Grid, Heading } from "@chakra-ui/layout";
import BannerPost from "./BannerPost";

const AllPosts = ({ data }) => {
  if (!data) return null;
  if (!Array.isArray(data)) return null;

  const Post = ({ post }) => {
    const sortedPosts = post?.sort((a, b) => {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });

    return (
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={2}
      >
        {sortedPosts?.map((post, i) => (
          <BannerPost key={i} post={post} />
        ))}
      </Grid>
    );
  };

  return (
    <>
      {data?.map((tags, i) => (
        <Box key={i} w="100%">
          <Heading size="md" mb="2">
            {tags.name}
          </Heading>
          <Post post={tags.blog_post} />
        </Box>
      ))}
    </>
  );
};

export default AllPosts;
