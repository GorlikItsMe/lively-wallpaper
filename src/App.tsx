import { DevTools } from "./components/devtools";

import { useWallpaper } from "@/hooks";
import NetworkWidget from "./components/widgets/network";
import ExampleWidget from "./components/widgets/example";

function App() {
  useWallpaper();
  console.log(`URL: ${location.href}`);

  return (
    <>
      {/* <NetworkWidget /> */}
      <ExampleWidget />

      <DevTools />
    </>
  );
}

export default App;
