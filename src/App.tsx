import { useSettings, useWallpaper } from "@/hooks";
import { DevTools } from "./components/devtools";
import NetworkWidget from "./components/widgets/network";
import ExampleWidget from "./components/widgets/example";

function App() {
  useWallpaper();
  const enableDevtools = useSettings("devtools-enabled", false);

  return (
    <>
      <ExampleWidget />
      <NetworkWidget />

      {enableDevtools && <DevTools />}
    </>
  );
}

export default App;
