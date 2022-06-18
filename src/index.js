import React from "react";
import ReactDOM from "react-dom/client";
import ApplicationRouter from "./Router";
import "./index.css";

import { Provider } from "react-redux";
import { globalStore } from "./store/globalStore";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <Provider store={globalStore}>
      <ApplicationRouter />
    </Provider>
  </ChakraProvider>
);
