import { Cpu, MemoryStick, Microchip } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import MoveableWidget from "../widgets-utils/moveable-widget";
import { useLively } from "@/hooks";

const useSystem = () => {
  const { systemInformation } = useLively();

  function formatProcent(val: number) {
    const extraZero = val < 10 ? "0" : "";
    return extraZero + val.toFixed(1) + "%";
  }

  const props = {
    cpuUsage: systemInformation?.CurrentCpu || 0,
    cpuUsageStr: formatProcent(systemInformation?.CurrentCpu || 0),
    cpuName: systemInformation?.NameCpu || "",

    gpu3dUsage: systemInformation?.CurrentGpu3D || 0,
    gpu3dUsageStr: formatProcent(systemInformation?.CurrentGpu3D || 0),
    gpuName: systemInformation?.NameGpu || "",

    // Fancy formula to make ram usage 0% if no data
    ramUsage: Math.max(
      0,
      (systemInformation?.TotalRam || 0) -
        (systemInformation?.CurrentRamAvail || 0)
    ),
    ramMax: systemInformation?.TotalRam || 0,
  };

  return {
    ...props,
    ramUsage: (props.ramUsage / props.ramMax) * 100,
    ramUsageStr: formatProcent((props.ramUsage / props.ramMax) * 100),
    ramUsageDesc: `${(props.ramUsage / 1024).toFixed(2)}GB / ${
      props.ramMax / 1024
    }GB`,
  };
};

function SystemProperty({
  progress,
  iconComponent,
  displayText,
  tooltipText,
}: {
  // 0-100
  progress: number;
  iconComponent: React.ReactNode;
  displayText: string | number;
  tooltipText: string | number;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex items-center gap-2 p-1 rounded border border-black/15 min-w-[80px] bg-black/5 relative z-10">
          <div
            className="bg-slate-600 absolute top-0 left-0 w-full h-full block -z-10 transition-all rounded-s"
            style={{
              width: progress,
            }}
          />
          {iconComponent}
          <div className="text-sm font-mono">{displayText}</div>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default function SystemUsagekWidget() {
  const sys = useSystem();

  return (
    <MoveableWidget id="system-usage-widget">
      <Card className="w-[300px]">
        <TooltipProvider>
          <CardHeader className="p-3">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center justify-between flex-row w-full">
                {/* cpu */}
                <SystemProperty
                  progress={sys.cpuUsage}
                  iconComponent={<Cpu className="h-5 w-5" />}
                  displayText={sys.cpuUsageStr}
                  tooltipText={sys.cpuName}
                />

                {/* ram */}
                <SystemProperty
                  progress={sys.ramUsage}
                  iconComponent={<MemoryStick className="h-5 w-5" />}
                  displayText={sys.ramUsageStr}
                  tooltipText={sys.ramUsageDesc}
                />

                {/* gpu */}
                <SystemProperty
                  progress={sys.gpu3dUsage}
                  iconComponent={<Microchip className="h-5 w-5" />}
                  displayText={sys.gpu3dUsageStr}
                  tooltipText={sys.gpuName}
                />
              </div>
            </CardTitle>
          </CardHeader>
        </TooltipProvider>
      </Card>
    </MoveableWidget>
  );
}
