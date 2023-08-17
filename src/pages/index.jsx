import * as React from "react";
import SEOComponent from "../components/SEOComponent";
import AllPosts from "../components/AllPosts";
import { graphql } from "gatsby";
import { Box, Heading, Stack } from "@chakra-ui/layout";

const IndexPage = ({ data }) => {
  const tags = data.allContentfulTags.nodes;
  return (
    <>
      <Stack spacing="6">
        {tags?.map((tag, i) => (
          <Box key={i} w="100%">
            <Heading size="md" mb="2">
              {tag.name}
            </Heading>
            <AllPosts data={tag.blog_post} />
          </Box>
        ))}
      </Stack>
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
          description {
            raw
          }
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
