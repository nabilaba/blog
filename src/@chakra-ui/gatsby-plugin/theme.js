import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";

const theme = extendTheme({
  styles: {
    "html *": {
      transitionProperty: "background-color, border-color",
      transitionDuration: "200ms",
      transitionTimingFunction: "linear",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
    disableTransitionOnChange: false,
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: "20px",
      },
    },
  },
});

export default theme;
