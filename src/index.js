import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import MiApolloProvider from "./components/MiApolloProvider";
import MiAuth0Provider from "./components/MiAuth0Provider";
ReactDOM.render(
  <React.StrictMode>
    <MiAuth0Provider>
      <MiApolloProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </MiApolloProvider>
    </MiAuth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
