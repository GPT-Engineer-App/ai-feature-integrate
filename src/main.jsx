import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#0A2540", // dark blue
    secondary: "#00FF5F", // neon green
    background: "#F4F5F7", // light background
  },
  fonts: {
    heading: "'Matter', sans-serif", // Evervault uses Matter
    body: "'Matter', sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        solid: (props) => ({
          bg: "primary",
          color: "white",
          _hover: {
            bg: "secondary",
            transform: "scale(1.05)",
          },
        }),
      },
    },
    Heading: {
      baseStyle: {
        color: "primary",
      },
    },
    Input: {
      baseStyle: {
        borderColor: "primary",
        focusBorderColor: "secondary",
      },
    },
    Textarea: {
      baseStyle: {
        borderColor: "primary",
        focusBorderColor: "secondary",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
