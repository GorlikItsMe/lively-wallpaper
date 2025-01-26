/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLively } from "@/hooks";
import { CSSProperties } from "react";

export interface MoveableWidgetProps {
  id: string;
  children: React.ReactNode;
}

function useWidgetSettings(id: string) {
  const { properties } = useLively();

  function tryParseInt(value: any, defaultValue: number) {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? defaultValue : parsed;
  }

  return {
    enabled: properties[`${id}-enabled`] || false,
    position: {
      x: tryParseInt(properties[`${id}-x`], 0),
      y: tryParseInt(properties[`${id}-y`], 0),
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
