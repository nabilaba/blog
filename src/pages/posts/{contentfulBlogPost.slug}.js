import React from "react";
import { graphql } from "gatsby";
import SEOComponent from "../../components/SEOComponent";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import RenderContentful from "../../components/RenderContentful";
import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { TimeAgo } from "../../utils";
import ReadingTime from "../../components/ReadingTime";

const PostTemplate = ({ data }) => {
  const post = data.contentfulBlogPost;
  const plainTextBody = documentToPlainTextString(JSON.parse(post?.body?.raw));

  return (
    <Box px={{ base: 4, lg: 24 }} h="100%" w="100%">
      <Box>
        <Heading fontSize="2xl">{post?.title}</Heading>
        <Text>
          {documentToPlainTextString(JSON.parse(post?.description.raw))}
        </Text>
        <HStack color="gray.500" fontSize="80%">
          <Text>{TimeAgo(post?.updatedAt)}</Text>
          <Text>·</Text>
          <ReadingTime text={plainTextBody} />
        </HStack>
      </Box>
      <GatsbyImage
        image={getImage(post?.heroImage)}
        alt={post?.title}
        style={{
          transition: "transform 0.5s ease",
          objectFit: "cover",
          width: "100%",
          height: "350px",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      />
      <RenderContentful content={post?.body} />
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
      updatedAt
      slug
    }
  }
`;
