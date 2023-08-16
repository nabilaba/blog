import React from "react";
import { Grid } from "@chakra-ui/layout";
import BannerPost from "./BannerPost";

const AllPosts = ({ posts }) => {
  if (!posts) return null;
  if (!Array.isArray(posts)) return null;

  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.updatedAt);
    const dateB = new Date(b.updatedAt);
    return dateB - dateA;
  });

  return (
    <>
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
    </>
  );
};

export default AllPosts;
