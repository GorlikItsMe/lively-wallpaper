import { DevTools } from "./components/devtools";

import { useWallpaper } from "@/hooks";
import NetworkWidget from "./components/widgets/network";
import ExampleWidget from "./components/widgets/example";

function App() {
  useWallpaper();
  console.log(`URL: ${location.href}`);

  return (
    <>
      <ExampleWidget />
      <NetworkWidget />

      <DevTools />
    </>
  );
}

export default App;
