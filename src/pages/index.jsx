import * as React from "react";
import SEOComponent from "../components/SEOComponent";
import BaseListPosts from "../components/BaseListPosts";
import { graphql } from "gatsby";
import { Box, Heading, Stack } from "@chakra-ui/layout";
import Empty from "../components/Empty";

const IndexPage = ({ data }) => {
  const blogPosts = data?.allContentfulBlogPost?.nodes;
  const tags = data?.allContentfulTags?.nodes;

  if (!tags) return <Empty />;
  if (!Array.isArray(tags)) return <Empty />;
  if (tags.length === 0) return <Empty />;

  return (
    <>
      <Stack spacing="6">
        <BaseListPosts data={blogPosts} />
        {tags?.map((tag, i) =>
          // if tag blog post is empty, don't show
          tag.blog_post.length === 0 ? null : (
            <Box key={i} w="100%">
              <Heading size="md" mb="2">
                {tag.name}
              </Heading>
              <BaseListPosts data={tag.blog_post} />
            </Box>
          )
        )}
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
