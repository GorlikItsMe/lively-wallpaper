import { useEffect } from "react";
import { Button } from "./ui/button";
import { useLively } from "@/hooks";
import eruda from "eruda";
// @ts-expect-error: to działa tylko że typów nie ma
import { default as MemoryStats } from "memory-stats";

export function DevTools() {
  const config = useLively();

  useEffect(() => {
    // install eruda
    eruda.init();
    eruda.position({ x: 600, y: 100 });

    // Add memory stats
    const stats = new MemoryStats();
    stats.domElement.style.position = "fixed";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);

    requestAnimationFrame(function rAFloop() {
      stats.update();
      requestAnimationFrame(rAFloop);
    });
  }, []);

  return (
    <div className="bg-black/80 rounded-lg text-white p-4 w-[300px] absolute bottom-[50px] left-0">
      <h1>DevTools</h1>
      <Button onClick={() => location.reload()}>Refresh page</Button>
      <Button
        onClick={() => {
          location.href = "http://localhost:5173";
        }}
      >
        Go to localhost:5173
      </Button>
      <pre className="text-xs">{JSON.stringify(config, null, 2)}</pre>
    </div>
  );
}
