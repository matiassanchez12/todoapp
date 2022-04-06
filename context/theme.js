import { extendTheme } from "@chakra-ui/react";
// https://chakra-ui.com/docs/theming/theme
export default extendTheme({
  config: {
    initialColorMode: "dark",
  },
  styles: {
    global: {
      fontFamily: "Lato",
      body: {
        color: "white",
      },
    },
  },
});
