import React, { useEffect } from "react";
import { graphql } from "gatsby";
import SEOComponent from "../components/SEOComponent";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import RenderContentful from "../components/RenderContentful";
import { Box, Heading, Text } from "@chakra-ui/react";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

const PostTemplate = ({ data }) => {
  const post = data.contentfulBlogPost;

  return (
    <Box px={{ base: 4, lg: 24 }} h="100%" w="100%">
      <Box>
        <Heading fontSize="2xl">{post.title}</Heading>
        <Text>
          {documentToPlainTextString(JSON.parse(post.description.raw))}
        </Text>
        <Text fontSize="80%" color="gray.400">
          {post.publishDate}
        </Text>
      </Box>
      <GatsbyImage
        image={getImage(post.heroImage)}
        alt={post.title}
        style={{
          transition: "transform 0.5s ease",
          objectFit: "cover",
          width: "100%",
          height: "350px",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      />
      <RenderContentful content={post.body} />
    </Box>
  );
};

export default PostTemplate;

export const Head = ({ data }) => {
  return <SEOComponent title={data.contentfulBlogPost.title} />;
};

export const query = graphql`
  query Post($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        raw
      }
      description {
        raw
      }
      heroImage {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
      publishDate(formatString: "DD MMMM YYYY", locale: "ID")
      slug
    }
  }
`;
