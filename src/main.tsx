import "@/styles/globals.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import {
  createHashHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";

const hashHistory = createHashHistory();
const router = createRouter({ routeTree, history: hashHistory });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
