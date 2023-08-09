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

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack
      bg={useColorModeValue("white", "gray.800")}
      p="2"
      justify="space-between"
      w="100%"
    >
      <Text fontWeight="bold">BeritaInformasi</Text>
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
          <Input
            p="0"
            placeholder="Cari berita"
            bg="transparent"
            outline="none"
            border="none"
            _focus={{ border: "none", outline: "none", boxShadow: "none" }}
          />
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
