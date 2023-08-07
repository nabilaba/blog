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
    heading: "Poppins",
    body: "Poppins",
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
    disableTransitionOnChange: false,
  },
});

export default theme;
