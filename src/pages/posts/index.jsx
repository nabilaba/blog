import * as React from "react";
import SEOComponent from "../../components/SEOComponent";
import AllPosts from "../../components/AllPosts";
import { graphql } from "gatsby";
import { Box, Heading } from "@chakra-ui/layout";

const IndexPage = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.nodes;
  return (
    <>
      <Box>
        <Heading size="md" mb="2">
          All Posts
        </Heading>
        <AllPosts data={blogPosts} />
      </Box>
    </>
  );
};

export default IndexPage;

export const Head = () => {
  return <SEOComponent />;
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
        description {
          raw
        }
      }
    }
  }
`;
