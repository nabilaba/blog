import React from "react";
import { graphql } from "gatsby";
import SEOComponent from "../../components/SEOComponent";
import { Box, UnorderedList, ListItem, Text } from "@chakra-ui/layout";
import CustomLink from "../../components/CustomLink";
import Empty from "../../components/Empty";

const IndexPage = ({ data }) => {
  const tags = data?.allContentfulTags?.nodes;

  if (!tags) return <Empty message="Tidak ada tag yang ditampilkan." />;
  if (!Array.isArray(tags))
    return <Empty message="Tidak ada tag yang ditampilkan." />;
  if (tags.length === 0)
    return <Empty message="Tidak ada tag yang ditampilkan." />;

  return (
    <>
      <Box>
        <Text mb="2">Menampilkan semua tags yang ada di blog ini.</Text>
        <UnorderedList listStylePosition="outside" w="fit-content" pl="4">
          {tags?.map((tag, i) => (
            <ListItem key={i}>
              <CustomLink
                // replace uppercase to dash and lowercase except first letter
                to={`/tags/${tag?.name
                  .replace(/([A-Z])/g, "-$1")
                  .toLowerCase()
                  .replace(/(^-)/g, "")}`}
              >
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
