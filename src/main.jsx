import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    evervault: {
      500: "#0A2540", // Assuming a dark blue tone similar to evervault.com
      300: "#F4F5F7", // Assuming a light background color similar to evervault.com
    },
  },
  fonts: {
    heading: "Inter, sans-serif", // Assuming Inter is used, which is a common sans-serif font
    body: "Inter, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "normal",
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "evervault.500" : "evervault.500",
          color: "white",
        }),
      },
    },
    Heading: {
      baseStyle: {
        color: "evervault.500",
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderColor: "evervault.300",
          _placeholder: {
            color: "gray.500",
          },
        },
      },
    },
    Textarea: {
      baseStyle: {
        borderColor: "evervault.300",
        _placeholder: {
          color: "gray.500",
        },
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
