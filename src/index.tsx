import React from "react";
import { createRoot } from "react-dom/client";
import AppFC from "./frontend/App.tsx";
import "./frontend/steps/index.ts";

const root = document.getElementById("root");
if ((root !== null) && (root !== undefined)) {
  createRoot(root).render(
    <AppFC />
  );
}

// --global window, document
