import { DevTools } from "./components/devtools";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { Widget, IWidget } from "@/components/widgets";

import { useLocalStorage } from "@uidotdev/usehooks";

const defaultWidgets: IWidget[] = [
  { id: "network-widget", type: "network", position: { x: 100, y: 100 } },
  { id: "example-widget", type: "example", position: { x: 100, y: 100 } },
];

function App() {
  const [widgets, setWidgets] = useLocalStorage("widgets", defaultWidgets);

  function handleDragEnd(event: DragEndEvent) {
    const { active, delta } = event;

    setWidgets((prevWidgets) =>
      prevWidgets.map((widget) => {
        if (widget.id === active.id) {
          return {
            ...widget,
            position: {
              x: widget.position.x + delta.x,
              y: widget.position.y + delta.y,
            },
          };
        }
        return widget;
      })
    );
  }

  console.log(localStorage.getItem("widgets"));

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        {widgets.map((widget) => {
          return <Widget key={widget.id} {...widget} />;
        })}
      </DndContext>

      <DevTools />
    </>
  );
}

export default App;
