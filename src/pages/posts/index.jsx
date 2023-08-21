import * as React from "react";
import SEOComponent from "../../components/SEOComponent";
import BaseListPosts from "../../components/BaseListPosts";
import { graphql } from "gatsby";
import { Box, Text } from "@chakra-ui/layout";

const IndexPage = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.nodes;
  return (
    <>
      <Box>
        <Text mb="2">Menampilkan semua post yang ada di blog ini.</Text>
        <BaseListPosts data={blogPosts} />
      </Box>
    </>
  );
};

export default IndexPage;

export const Head = () => {
  return <SEOComponent title="All Posts" />;
};

export const pageQuery = graphql`
  query PostsQuery {
    allContentfulBlogPost(sort: { updatedAt: DESC }) {
      nodes {
        title
        updatedAt
        slug
        heroImage {
          gatsbyImageData
        }
        tags {
          name
        }
        body {
          raw
        }
        description {
          raw
        }
      }
    }
  }
`;
