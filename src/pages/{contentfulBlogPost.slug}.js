import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import SEOComponent from "../components/SEOComponent";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import RenderContentful from "../components/RenderContentful";
import { Heading } from "@chakra-ui/react";

const PostTemplate = ({ data }) => {
  const post = data.contentfulBlogPost;

  return (
    <Layout>
      <GatsbyImage
        image={getImage(post.heroImage)}
        alt={post.title}
        style={{
          transition: "transform 0.5s ease",
          objectFit: "cover",
          width: "100%",
          height: "300px",
        }}
      />
      <Heading fontSize="2xl" my="4">
        {post.title}
      </Heading>
      <RenderContentful content={post.body} />
    </Layout>
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
      slug
    }
  }
`;
