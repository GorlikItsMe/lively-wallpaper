import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box } from "lucide-react";
import { CSSProperties } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function ExampleWidget({
  id,
  position,
}: {
  id?: string;
  position: { x: number; y: number };
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id || "empty-widget",
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

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="cursor-move touch-none select-none"
    >
      <Card className="w-[300px] bg-black/40 text-white border-white/10">
        <CardHeader className="p-3" {...attributes} {...listeners}>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center justify-between flex-row gap-4 w-full">
              <Box className="h-5 w-5" />
              <div>Example Widget</div>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="p-3 pt-0">
          You can add there some content
        </CardContent>
      </Card>
    </div>
  );
}
