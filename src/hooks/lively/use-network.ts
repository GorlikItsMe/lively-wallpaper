import { useLively } from "@/hooks";
import { useEffect, useState } from "react";


export function useNetwork() {
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