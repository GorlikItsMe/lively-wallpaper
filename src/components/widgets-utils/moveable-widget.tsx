/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSettings } from "@/hooks";
import { CSSProperties } from "react";

export interface MoveableWidgetProps {
  id: string;
  children: React.ReactNode;
}

function useWidgetSettings(id: string) {
  const settings = useSettings() as Record<string, any>;

  function tryParseInt(value: any, defaultValue: number) {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? defaultValue : parsed;
  }

  return {
    enabled: settings[`${id}-enabled`] || false,
    position: {
      x: tryParseInt(settings[`${id}-x`], 0),
      y: tryParseInt(settings[`${id}-y`], 0),
    },
  };
}

export default function MoveableWidget({ id, children }: MoveableWidgetProps) {
  const { position, enabled } = useWidgetSettings(id);

  const style: CSSProperties = {
    position: "absolute",
    top: position.y,
    left: position.x,
  };
  return (
    <div id={id} style={style}>
      {enabled && children}
    </div>
  );
}
