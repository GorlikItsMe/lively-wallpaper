import { useSettings, useWallpaper } from "@/hooks";
import { DevTools } from "./components/devtools";
import NetworkWidget from "./components/widgets/network";
import ExampleWidget from "./components/widgets/example";
import SystemUsagekWidget from "./components/widgets/system-usage";
import { livelyRandomGenerator } from "@/lib/utils";
import WeatherWidget from "./components/widgets/weather";

// @ts-ignore
window.livelyRandomGenerator = livelyRandomGenerator;

const isLivelyBrowser = location.protocol == "localfolder:";
if (!isLivelyBrowser) {
  // We are in real browser. Start random data generator to show something on screan
  console.log("run `livelyRandomGenerator()`");
}

function App() {
  useWallpaper();
  const enableDevtools = useSettings("devtools-enabled", false);

  return (
    <>
      <ExampleWidget />
      <NetworkWidget />
      <SystemUsagekWidget />
      <WeatherWidget />

      {enableDevtools && <DevTools />}
    </>
  );
}

export default App;
