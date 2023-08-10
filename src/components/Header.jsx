import * as React from "react";
import {
  HStack,
  IconButton,
  Input,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Link } from "gatsby";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack
      bg={useColorModeValue("white", "gray.800")}
      px="4"
      justify="space-between"
      w="100%"
      h="50px"
      pos="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="100"
    >
      <Text as={Link} to="/" fontWeight="extrabold" color="red">
        Berbagi
        <Text as="span" color={useColorModeValue("gray.500", "gray.200")}>
          Informasi
        </Text>
      </Text>
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
          onClick={() => toggleColorMode()}
          _hover={{ bg: "transparent" }}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
