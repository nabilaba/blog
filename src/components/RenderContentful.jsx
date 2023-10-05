import * as React from "react";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import {
  Code,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b>{text}</b>,
    [MARKS.ITALIC]: (text) => <i>{text}</i>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => <Code>{text}</Code>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <Link href={node.data.uri} target="_blank" textDecoration="underline">
        {children}
      </Link>
    ),
    [BLOCKS.HEADING_1]: (node, children) => <Heading>{children}</Heading>,
    [BLOCKS.HEADING_2]: (node, children) => {
      return <Heading fontSize="xl">{children}</Heading>;
    },
    [BLOCKS.HEADING_3]: (node, children) => (
      <Heading fontSize="xl">{children}</Heading>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <Heading fontSize="xl">{children}</Heading>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <Heading fontSize="xl">{children}</Heading>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <Heading fontSize="xl">{children}</Heading>
    ),

    [BLOCKS.OL_LIST]: (node, children) => <OrderedList>{children}</OrderedList>,
    [BLOCKS.UL_LIST]: (node, children) => (
      <UnorderedList>{children}</UnorderedList>
    ),

    [BLOCKS.LIST_ITEM]: (node, children) => (
      <ListItem
        ml="4"
        sx={{
          p: {
            mt: "0",
            mb: "0",
          },
        }}
      >
        {children}
      </ListItem>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node.content[0].value === "") {
        return <br />;
      } else {
        return (
          <Text whiteSpace="pre-wrap" my="3">
            {children}
          </Text>
        );
      }
    },
    [BLOCKS.QUOTE]: (children) => (
      <blockquote className="border-l-4 border-brand-primary bg-gray-50 p-3 rounded font-bold my-6">
        <>"{children.content[0].content[0].value}"</>
      </blockquote>
    ),
    [BLOCKS.HR]: () => <header />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, title } = node.data.target;
      if (!gatsbyImageData) {
        return null;
      }
      return <GatsbyImage image={getImage(gatsbyImageData)} alt={title} />;
    },
  },
};

const RenderContentful = ({ content }) => {
  return <>{renderRichText(content, options)}</>;
};

export default RenderContentful;
