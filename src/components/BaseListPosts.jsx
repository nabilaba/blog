import React from "react";
import { Grid } from "@chakra-ui/layout";
import BannerPost from "./BannerPost";

const AllPosts = ({ data }) => {
  if (!data) return null;
  if (!Array.isArray(data)) return null;
  if (data.length === 0) return null;

  const sortedPosts = data?.sort((a, b) => {
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

export default AllPosts;
