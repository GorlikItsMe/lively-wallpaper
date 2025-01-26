import { DevTools } from "./components/devtools";

import { useSettings, useWallpaper } from "@/hooks";
import NetworkWidget from "./components/widgets/network";
import ExampleWidget from "./components/widgets/example";

function App() {
  useWallpaper();
  console.log(`URL: ${location.href}`);
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
