import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box } from "lucide-react";
import MoveableWidget from "../widgets-utils/moveable-widget";

export default function ExampleWidget() {
  return (
    <MoveableWidget id="example-widget">
      <Card className="w-[300px] bg-black/40 text-white border-white/10">
        <CardHeader className="p-3">
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
    </MoveableWidget>
  );
}
