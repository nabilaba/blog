import React from "react";
import { graphql } from "gatsby";
import SEOComponent from "../../components/SEOComponent";
import { Box, UnorderedList, ListItem, Text } from "@chakra-ui/layout";
import CustomLink from "../../components/CustomLink";

const IndexPage = ({ data }) => {
  const tags = data.allContentfulTags.nodes;
  return (
    <>
      <Box>
        <Text mb="2">Menampilkan semua tags yang ada di blog ini.</Text>
        <UnorderedList listStylePosition="outside" w="fit-content" pl="4">
          {tags?.map((tag, i) => (
            <ListItem key={i}>
              <CustomLink to={`/tags/${tag.name.toLowerCase()}`}>
                {tag.name}
              </CustomLink>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
};

export default IndexPage;

export const Head = () => {
  return <SEOComponent title="All Tags" />;
};

export const pageQuery = graphql`
  query TagsQuery {
    allContentfulTags(sort: { updatedAt: DESC }) {
      nodes {
        name
      }
    }
  }
`;
