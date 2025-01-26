import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LivelyContextProvider } from "./context/livelyContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LivelyContextProvider>
      <App />
    </LivelyContextProvider>
  </StrictMode>
);
