import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLively } from "@/hooks";
import { cn } from "@/lib/utils";
import { Activity, ArrowUp, ArrowDown } from "lucide-react";
import { ChartContainer } from "../ui/chart";
import { Area, AreaChart, CartesianGrid } from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { CSSProperties, useEffect, useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function useNetwork() {
  const { systemInformation } = useLively();
  const [networkChartData, setNetworkChartData] = useState<
    { timestamp: number; downloadSpeed: number; uploadSpeed: number }[]
  >([]);

  useEffect(() => {
    setNetworkChartData((prevHistory) =>
      prevHistory.slice(-29).concat([
        {
          timestamp: Date.now(),
          downloadSpeed: systemInformation?.CurrentNetDownBytesPerSecond || 0,
          uploadSpeed: systemInformation?.CurrentNetUpBytesPerSecond || 0,
        },
      ])
    );
  }, [systemInformation]);

  return {
    networkChartData,
    currentDownloadSpeed: systemInformation?.CurrentNetDownBytesPerSecond || 0,
    currentUploadSpeed: systemInformation?.CurrentNetUpBytesPerSecond || 0,
  };
}

function formatNetSpeed(bytesPerSecond: number) {
  const speedKbps = bytesPerSecond / 1024;
  if (Math.round(speedKbps) < 1024) return `${speedKbps.toFixed(2)} Kb/s`;
  const speedMbps = speedKbps / 1024;
  if (Math.round(speedMbps) < 1024) return `${speedMbps.toFixed(2)} Mb/s`;
  // todo add more speed units if needed

  return `${speedMbps.toFixed(2)} Mb/s`;
}

function NetworkSpeedTitle({ speed }: { speed: number }) {
  const [value, unit] = formatNetSpeed(speed).split(" ", 2);
  return (
    <div className="text-md font-mono">
      {value}
      <span className="text-xs font-sans ms-2">{unit}</span>
    </div>
  );
}

export default function NetworkWidget({
  className,
  id,
  position,
  config: _config,
}: {
  className?: string;
  id?: string;
  position: { x: number; y: number };
  config?: {
    downloadColor: string;
    uploadColor: string;
  };
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id || "network-widget",
  });

  const style: CSSProperties = transform
    ? {
        position: "absolute",
        top: position.y,
        left: position.x,
        transform: CSS.Transform.toString(transform),
      }
    : {
        position: "absolute",
        top: position.y,
        left: position.x,
      };

  const config = _config ?? {
    downloadColor: "#c67941",
    uploadColor: "#4ac641",
  };

  const { networkChartData, currentDownloadSpeed, currentUploadSpeed } =
    useNetwork();

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="cursor-move touch-none select-none"
    >
      <Card
        className={cn(
          "w-[300px] bg-black/40 text-white border-white/10",
          className
        )}
      >
        <CardHeader className="p-3" {...attributes} {...listeners}>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center justify-between flex-row gap-4 w-full">
              <Activity className="h-5 w-5" />
              <div className="flex items-center gap-2">
                <NetworkSpeedTitle speed={currentUploadSpeed} />
                <ArrowUp
                  className="h-5 w-5"
                  style={{ color: config.uploadColor }}
                />
              </div>

              <div className="flex items-center gap-2">
                <NetworkSpeedTitle speed={currentDownloadSpeed} />
                <ArrowDown
                  className="h-5 w-5"
                  style={{ color: config.downloadColor }}
                />
              </div>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="p-3 pt-0">
          <div>
            <ChartContainer
              config={{
                downloadSpeed: {
                  label: "Download",
                  color: config.downloadColor,
                },
                uploadSpeed: {
                  label: "Upload",
                  color: config.uploadColor,
                },
              }}
              className="h-[80px] w-full"
            >
              <AreaChart
                data={networkChartData}
                margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                height={80}
              >
                <defs>
                  <linearGradient
                    id="downloadSpeedGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="var(--color-downloadSpeed)"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-downloadSpeed)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient
                    id="uploadSpeedGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="var(--color-uploadSpeed)"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-uploadSpeed)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                {/* <CartesianGrid stroke="#ccc" /> */}
                <Area
                  type="monotone"
                  dataKey="downloadSpeed"
                  stroke="var(--color-downloadSpeed)"
                  fill="url(#downloadSpeedGradient)"
                  isAnimationActive={false}
                />
                <Area
                  type="monotone"
                  dataKey="uploadSpeed"
                  stroke="var(--color-uploadSpeed)"
                  fill="url(#uploadSpeedGradient)"
                  isAnimationActive={false}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      hideLabel
                      labelClassName="me-2"
                      valueFormatter={(value) => (
                        <>&nbsp; {formatNetSpeed(parseInt(value as string))}</>
                      )}
                    />
                  }
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
