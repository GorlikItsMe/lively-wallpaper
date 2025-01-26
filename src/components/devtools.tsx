import { useEffect } from "react";
import { Button } from "./ui/button";
import { useLively } from "@/hooks";
import eruda from "eruda";
// @ts-expect-error: to działa tylko że typów nie ma
import { default as MemoryStats } from "memory-stats";
import { Card } from "./ui/card";

export function DevTools() {
  const config = useLively();

  useEffect(() => {
    // install eruda
    eruda.init();
    eruda.position({ x: 100, y: 5 });

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

    return () => {
      eruda.destroy(); // remove eruda
      stats.domElement.remove(); // remove memory stats
      document.getElementById(stats.domElement.id)?.remove(); // remove memory stats
    };
  }, []);

  return (
    <Card className="p-4 absolute bottom-[50px] left-0">
      <h1>DevTools</h1>
      <Button onClick={() => location.reload()}>Refresh page</Button>
      <Button
        onClick={() => {
          location.href = "http://localhost:5173";
        }}
      >
        Go to localhost:5173
      </Button>
      <div className="text-xs">location.href: {location.href}</div>
      <pre className="text-xs">{JSON.stringify(config, null, 2)}</pre>
    </Card>
  );
}
