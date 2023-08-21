import * as React from "react";
import { IconButton } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { HStack, Text, Stack } from "@chakra-ui/layout";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { SearchIcon, SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "gatsby-link";
import { graphql, useStaticQuery } from "gatsby";
import CustomLink from "./CustomLink";
import { Hide } from "@chakra-ui/media-query";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/modal";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const NavItem = (props) => (
    <Stack
      spacing="6"
      direction={{ base: "column", md: "row" }}
      w="fit-content"
      {...props}
    >
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
      <CustomLink to="/sitemap-0.xml">Sitemap</CustomLink>
    </Stack>
  );

  return (
    <>
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
        <HStack spacing="6">
          <HStack spacing="3">
            <IconButton
              size="sm"
              icon={<HamburgerIcon />}
              aria-label="Open Menu"
              display={{ base: "inherit", md: "none" }}
              variant="outline"
              onClick={onOpen}
            />
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
          </HStack>
          <Hide below="md">
            <NavItem />
          </Hide>
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
      <Hide above="md">
        <Drawer
          isOpen={isOpen}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          placement="left"
          size="full"
          onClose={onClose}
        >
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
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
            </DrawerHeader>
            <DrawerBody>
              <NavItem onClick={onClose} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Hide>
    </>
  );
};

export default Header;
