import { extendTheme } from "@chakra-ui/react";
// https://chakra-ui.com/docs/theming/theme
export default extendTheme({
  config: {
    initialColorMode: "dark",
  },
  fonts: {
    "barlow-condensed": "Barlow Condensed, serif",
    barlow: "Barlow, serif",
    bellefair: "Bellefair",
  },
  colors: {
    white: "#FFFFFF",
    black: "#0B0D17",
    violet: "#D0D6F9",
  },
  styles: {
    global: {
      body: {
        color: "white",
      },
    },
  },
  components: {
    Text: {
      variants: {
        "title-home-desc": {
          fontFamily: "barlow",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: { base: "3vw", md: "1.5vw" },
          color: "violet",
          lineHeight: "2rem",
        },
        "button-home-text": {
          fontFamily: "bellefair",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: { base: "3vw", md: "1.5vw" },
          letterSpacing: "2px",
          color: "black",
        },
        "link-number": {
          fontFamily: "barlow-condensed",
          fontWeight: 700,
          fontSize: "0.9rem",
          textTransform: "uppercase",
          letterSpacing: 2,
        },
        "link-text": {
          fontFamily: "barlow-condensed",
          fontSize: "0.9rem",
          fontWeight: 400,
          textTransform: "uppercase",
          letterSpacing: 2,
        },
        "crew-description": {
          color: "violet",
          fontWeight: 400,
          fontFamily: "barlow",
          fontStyle: "normal",
          fontSize: ["1rem", "1.1rem", "1.1rem"],
        },
        "tech-title": {
          fontWeight: 400,
          fontStyle: "normal",
          color: "violet",
          letterSpacing: "2.7px",
          fontSize: ["0.9rem", "1.1rem", "1.2rem"],
        },
        "tech-content": {
          fontWeight: 400,
          fontStyle: "normal",
          fontFamily: "barlow",
          color: "violet",
          lineHeight: ["1.5rem", "1.5rem", "2rem"],
          fontSize: ["0.7rem", "1.1rem", "1.2rem"],
        },
      },
    },
    Heading: {
      variants: {
        "title-home-so": {
          fontFamily: "barlow-condensed",
          fontWeight: 400,
          fontSize: ["1rem", "1.3rem", "2rem"],
          letterSpacing: "5px",
          color: "violet",
          textTransform: "uppercase",
        },
        "title-home-space": {
          fontFamily: "bellefair",
          fontWeight: 400,
          fontSize: "8.9vw",
          color: "white",
          letterSpacing: "10px",
          textTransform: "uppercase",
        },
        title: {
          fontWeight: 400,
          flexDirection: "row",
          display: "flex",
          letterSpacing: 2,
          gap: 5,
          justifyContent: ["center", "start", "start"],
          fontSize: ["1rem", "1.2rem", "1.5rem"],
        },
        title_word: {
          fontFamily: "content",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "5rem",
        },
        number_title: {
          fontWeight: "bold",
          letterSpacing: 5,
          color: "#FFFFFF",
          opacity: 0.25,
          fontSize: ["1rem", "1.2rem", "1.5rem"],
          fontStyle: "normal",
        },
        tech_name: {
          fontFamily: "content",
          fontWeight: 400,
          fontStyle: "normal",
          textTransform: "uppercase",
          fontSize: ["1.7rem", "1.8rem", "2.5rem"],
        },
        crew_role: {
          fontFamily: "content",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "1.6rem",
          opacity: 0.5,
          textTransform: "uppercase",
        },
        crew_name: {
          fontFamily: "content",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "2.5rem",
          textTransform: "uppercase",
        },
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none",
        },
      },
      variants: {
        header: {
          textDecoration: "none",
          display: "flex",
          direction: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          fontWeight: 400,
          cursor: "pointer",
          transition: "all 0.7s ease-out",
          borderBottomColor: "transparent",
          borderStyle: "solid",
          borderBottomWidth: "3px",
          opacity: 1,
          _hover: {
            borderBottomColor: "rgba(255, 255, 255, .5)",
          },
        },
      },
    },
  },
});
