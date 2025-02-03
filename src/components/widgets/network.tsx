import { Activity, ArrowUp, ArrowDown } from "lucide-react";
import { Area, AreaChart, CartesianGrid, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useNetwork, useSettings } from "@/hooks";
import MoveableWidget from "../widgets-utils/moveable-widget";

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

export default function NetworkWidget() {
  const { networkChartData, currentDownloadSpeed, currentUploadSpeed } =
    useNetwork();
  const config = {
    downloadColor: useSettings("network-widget-downColor", "#c67941"),
    uploadColor: useSettings("network-widget-upColor", "#4ac641"),
  };

  return (
    <MoveableWidget id="network-widget">
      <Card className="w-[300px]">
        <CardHeader className="p-3">
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
                {/* That thing is here to set minimum graph size */}
                <YAxis domain={[0, 1024 * 1024]} hide />
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
    </MoveableWidget>
  );
}
