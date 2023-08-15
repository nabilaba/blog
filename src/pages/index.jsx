import * as React from "react";
import SEOComponent from "../components/SEOComponent";
import Section1 from "../components/Home/Section1";
import Headline from "../components/Home/Headline";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  console.log(data);

  const posts = data.allContentfulBlogPost.nodes;
  return (
    <>
      <Headline />
      <Section1 posts={posts} />
    </>
  );
};

export default IndexPage;

export const Head = () => {
  return <SEOComponent />;
};

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { publishDate: DESC }) {
      nodes {
        title
        slug
        publishDate(locale: "ID", formatString: "DD MMMM YYYY")
        tags
        heroImage {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`;
