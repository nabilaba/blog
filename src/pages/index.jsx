import * as React from "react";
import SEOComponent from "../components/SEOComponent";
import AllPosts from "../components/AllPosts";
import { graphql } from "gatsby";
import { Box, Heading } from "@chakra-ui/react";

const IndexPage = ({ data }) => {
  return (
    <>
      {data.allContentfulTags.nodes.map((tags, i) => (
        <Box key={i} w="100%">
          <Heading size="md" mb="2">
            {tags.name}
          </Heading>
          <AllPosts posts={tags?.blog_post} />
        </Box>
      ))}
    </>
  );
};

export default IndexPage;

export const Head = () => {
  return <SEOComponent />;
};

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulTags(sort: { name: ASC }) {
      nodes {
        blog_post {
          tags {
            name
          }
          title
          slug
          updatedAt
          heroImage {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
        name
      }
    }
  }
`;
