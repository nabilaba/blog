import React from "react";
import { IconButton } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { HStack, Text, Stack, StackDivider } from "@chakra-ui/layout";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/modal";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const drawerMobile = useDisclosure();
  const searchModal = useDisclosure();
  const [searchInput, setSearchInput] = React.useState("");

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        totalCount
      }
      allContentfulTags {
        nodes {
          blog_post {
            title
            slug
          }
          name
        }
        totalCount
      }
    }
  `);

  const filteredData = data?.allContentfulTags?.nodes?.map((node) => {
    const filteredBlogPost = node?.blog_post?.filter((post) =>
      post.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    return {
      name: node.name,
      blog_post: filteredBlogPost,
    };
  });

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
          ({data?.allContentfulBlogPost?.totalCount})
        </sup>
      </CustomLink>
      <CustomLink to="/tags">
        Tags
        <sup style={{ fontStyle: "italic" }}>
          ({data?.allContentfulTags?.totalCount})
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
              onClick={drawerMobile.onOpen}
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
          <NavItem display={{ base: "none", md: "inherit" }} />
        </HStack>
        <HStack>
          <HStack
            px="3"
            spacing="2"
            bg={{
              base: "transparent",
              md: useColorModeValue("gray.100", "gray.700"),
            }}
            rounded="full"
            justify="space-between"
            w={{ base: "100%", md: "20vw" }}
            onClick={() => {
              searchModal.onOpen();
              setSearchInput("");
            }}
            cursor="pointer"
          >
            <Text
              display={{ base: "none", md: "inherit" }}
              color={useColorModeValue("gray.500", "gray.300")}
              fontSize="sm"
            >
              Cari Postingan
            </Text>
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              variant="ghost"
              colorScheme="gray"
              size="sm"
              minW="0"
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
          isOpen={drawerMobile.isOpen}
          returnFocusOnClose={false}
          onOverlayClick={drawerMobile.onClose}
          placement="left"
          size="full"
          onClose={drawerMobile.onClose}
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
                onClick={drawerMobile.onClose}
              >
                NabilBlog.
              </Text>
            </DrawerHeader>
            <DrawerBody>
              <NavItem onClick={drawerMobile.onClose} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Hide>
      <Modal
        isOpen={searchModal.isOpen}
        onClose={searchModal.onClose}
        size={{ base: "md", md: "2xl" }}
      >
        <ModalOverlay />
        <ModalContent bg={useColorModeValue("gray.100", "gray.700")}>
          <ModalBody>
            <Stack divider={<StackDivider />}>
              <HStack justify="space-between">
                <Input
                  px="0"
                  placeholder="Cari Postingan"
                  onChange={(e) => setSearchInput(e.target.value)}
                  fontSize="sm"
                />
                <IconButton
                  aria-label="Search"
                  icon={<SearchIcon />}
                  variant="ghost"
                  colorScheme="gray"
                  size="sm"
                  minW="0"
                />
              </HStack>
              {searchInput &&
                searchInput.length > 1 &&
                filteredData?.filter((node) => node.blog_post.length > 0)
                  .length > 0 && (
                  <Stack my="4">
                    {filteredData?.map((node) => (
                      <Stack key={node.name} spacing="2">
                        <Text fontWeight="bold">{node.name}</Text>
                        {node.blog_post.map((post) => (
                          <CustomLink
                            key={post.slug}
                            to={`/posts/${post.slug}`}
                            onClick={() => {
                              searchModal.onClose();
                              setSearchInput("");
                            }}
                          >
                            {post.title}
                          </CustomLink>
                        ))}
                      </Stack>
                    ))}
                  </Stack>
                )}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Header;
