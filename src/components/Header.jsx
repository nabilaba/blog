import * as React from "react";
import { IconButton } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { HStack, Text } from "@chakra-ui/layout";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { SearchIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Link } from "gatsby-link";
import { graphql, useStaticQuery } from "gatsby";
import CustomLink from "./CustomLink";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        totalCount
      }
      allContentfulTags {
        totalCount
      }
    }
  `);

  return (
    <HStack
      as="nav"
      bg={useColorModeValue("white", "gray.800")}
      px="4"
      justify="space-between"
      w="100%"
      h="50px"
      pos="sticky"
      top="0"
      zIndex="100"
      boxShadow="sm"
    >
      <HStack spacing="10">
        <Text
          as={Link}
          to="/"
          fontWeight="extrabold"
          fontStyle="italic"
          fontSize="3xl"
          letterSpacing="wider"
        >
          NabilBlog.
        </Text>
        <HStack spacing="6">
          <CustomLink to="/posts">
            Posts
            <sup style={{ fontStyle: "italic" }}>
              ({data.allContentfulBlogPost.totalCount})
            </sup>
          </CustomLink>
          <CustomLink to="/tags">
            Tags
            <sup style={{ fontStyle: "italic" }}>
              ({data.allContentfulTags.totalCount})
            </sup>
          </CustomLink>
          <CustomLink to="/sitemap.xml">Sitemap</CustomLink>
        </HStack>
      </HStack>
      <HStack>
        <HStack
          as="form"
          px="2"
          spacing="2"
          bg={useColorModeValue("gray.100", "gray.700")}
          rounded="full"
          justify="space-between"
          w="20vw"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input p="0" placeholder="Cari berita" bg="transparent" size="sm" />
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            variant="ghost"
            colorScheme="gray"
            size="sm"
            type="submit"
          />
        </HStack>
        <IconButton
          aria-label="Dark mode"
          icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          variant="ghost"
          colorScheme="gray"
          size="md"
          onClick={toggleColorMode}
          _hover={{ bg: "transparent" }}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
