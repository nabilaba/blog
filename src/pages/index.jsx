import * as React from "react";
import SEOComponent from "../components/SEOComponent";
import AllPosts from "../components/AllPosts";
import { graphql } from "gatsby";
import { Stack } from "@chakra-ui/layout";

const IndexPage = ({ data }) => {
  return (
    <>
      <Stack>
        <AllPosts data={data.allContentfulTags.nodes} />
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
      }
    }
  }
`;
