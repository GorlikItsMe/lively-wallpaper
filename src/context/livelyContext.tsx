"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface LivelyContextProps {
  systemInformation: ILivelySystemInformation | null;
  properties: ILivelyProperties;
}

interface ILivelySystemInformation {
  NameCpu: string;
  NameGpu: string;
  NameNetCard: string;
  CurrentCpu: number;
  CurrentGpu3d: number;
  CurrentRamAvail: number;
  CurrentNetDown: number;
  CurrentNetUp: number;

  CurrentNetDownBytesPerSecond: number;
  CurrentNetUpBytesPerSecond: number;

  TotalRam: number;
}

interface ILivelyProperties {
  backgroundImageDaySelect?: string;
  backgroundImageNightSelect?: string;
}

const LivelyContext = createContext<LivelyContextProps>(
  {} as LivelyContextProps
);

export const useLively = () => {
  const context = useContext(LivelyContext);
  if (!context) {
    throw new Error("useLively must be used within a LivelyContextProvider");
  }
  return context;
};

export const LivelyContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sysInf, setSysInf] = useState<ILivelySystemInformation | null>(null);
  const [properties, setProps] = useState<ILivelyProperties>({});

  useEffect(() => {
    // @ts-expect-error: Is okay
    window.livelySystemInformation = (data: string) => {
      const obj = JSON.parse(data) as Omit<
        ILivelySystemInformation,
        "CurrentNetDownBytesPerSecond" | "CurrentNetUpBytesPerSecond"
      >;
      setSysInf({
        ...obj,
        CurrentNetDownBytesPerSecond: obj.CurrentNetDown * 8,
        CurrentNetUpBytesPerSecond: obj.CurrentNetUp * 8,
      });
    };

    // @ts-expect-error: Is okay
    window.livelyPropertyListener = (key: string, value: string) => {
      setProps({ ...properties, [key]: value });
    };
  }, []);

  return (
    <LivelyContext.Provider value={{ systemInformation: sysInf, properties }}>
      {children}
    </LivelyContext.Provider>
  );
};
