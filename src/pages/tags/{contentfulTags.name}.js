import React from "react";
import BaseListPosts from "../../components/BaseListPosts";
import SEOComponent from "../../components/SEOComponent";
import { graphql } from "gatsby";
import { Box, Text } from "@chakra-ui/layout";

const TagTemplate = ({ data }) => {
  const posts = data.contentfulTags.blog_post;
  const tag = data.contentfulTags.name;
  return (
    <>
      <Box>
        <Text mb="2">
          Menampilkan {posts.length} post dengan tag <b>{tag}</b>
        </Text>
        <BaseListPosts data={posts} />
      </Box>
    </>
  );
};

export default TagTemplate;

export const Head = ({ data }) => {
  const tag = data.contentfulTags.name;
  return <SEOComponent title={`Tag: ${tag}`} />;
};

export const query = graphql`
  query Tags($name: String) {
    contentfulTags(name: { eq: $name }) {
      name
      blog_post {
        body {
          raw
        }
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
    }
  }
`;
