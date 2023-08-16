import { extendTheme } from "@chakra-ui/theme-utils";

const theme = extendTheme({
  styles: {
    global: () => ({
      "html *": {
        transitionProperty: "background-color, border-color",
        transitionDuration: "200ms",
        transitionTimingFunction: "linear",
      },
    }),
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
    disableTransitionOnChange: false,
  },
  components: {
    Input: {
      variants: {
        outline: {
          field: {
            border: "none",
            outline: "none",
            boxShadow: "none",
            _focus: { border: "none", outline: "none", boxShadow: "none" },
          },
        },
      },
    },
    Button: {
      variants: {
        ghost: {
          bg: "transparent",
          _hover: { bg: "transparent" },
          _active: { bg: "transparent" },
        },
      },
    },
  },
});

export default theme;
