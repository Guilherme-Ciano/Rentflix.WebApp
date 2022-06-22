import React from "react";
import ReactDOM from "react-dom/client";
import ApplicationRouter from "./Router";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import { globalStore } from "./store/globalStore";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <Provider store={globalStore}>
      <ApplicationRouter />
      <ToastContainer />
    </Provider>
  </ChakraProvider>
);
