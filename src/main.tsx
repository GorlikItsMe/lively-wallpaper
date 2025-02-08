import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LivelyContextProvider } from "./context/livelyContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <LivelyContextProvider>
        <App />
      </LivelyContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
