import * as React from "react";
import {
  Box,
  Grid,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import SEOComponent from "../components/SEOComponent";
import { Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";

const IndexPage = () => {
  const img =
    "https://asset.kompas.com/crops/z_mS8xWgJw0nYWgXPh6zqGiYXto=/0x0:5472x3648/750x500/data/photo/2019/10/25/5db2e12290693.jpg";
  const loadImg = getImage(img) || img;
  return (
    <>
      <Layout>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={2}
        >
          {Object.keys(Array.from(Array(4))).map((_, i) => (
            <Box
              as={Link}
              to="/article"
              pos="relative"
              w="100%"
              h="calc(100vh / 4)"
              key={i}
              role="group"
              rounded="xl"
              overflow="hidden"
            >
              <Image
                src={loadImg}
                alt="..."
                objectFit="cover"
                w="100%"
                h="100%"
                transition="all 0.3s ease-in-out"
                _groupHover={{
                  transform: "scale(1.1)",
                }}
              />
              <Box
                pos="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bgGradient="linear(to-t, blackAlpha.900 20%, transparent)"
                transition="all 0.3s ease-in-out"
              />
              <Box
                pos="absolute"
                bottom="0"
                left="0"
                right="0"
                p="2"
                fontSize="md"
                color="white"
                transition="all 0.3s ease-in-out"
                // transform="translateY(25%)"
                // _groupHover={{
                //   transform: "translateY(0)",
                // }}
              >
                <Text
                  fontSize="90%"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Partai geram dengan pemerintah yang tidak konsisten dalam
                  menangani pandemi covid-19 di Indonesia
                </Text>
                <HStack spacing="1" mt="1">
                  <Text
                    fontSize="80%"
                    bg="red"
                    px="1"
                    rounded="sm"
                    w="fit-content"
                  >
                    Berita
                  </Text>
                  <Text
                    fontSize="80%"
                    color="gray.400"
                    // transition="all 0.3s ease-in-out"
                    // opacity="0"
                    // _groupHover={{ opacity: 1 }}
                  >
                    2 menit lalu
                  </Text>
                </HStack>
              </Box>
            </Box>
          ))}
        </Grid>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => {
  return <SEOComponent />;
};
