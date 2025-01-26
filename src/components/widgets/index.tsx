import ExampleWidget from "./example";
import NetworkWidget from "./network";

export interface IWidget {
  id: string;
  type: "network" | "example";
  position: { x: number; y: number };
}

export function Widget(props: IWidget) {
  if (props.type === "network") {
    return <NetworkWidget position={props.position} id={props.id} />;
  }

  return <ExampleWidget position={props.position} id={props.id} />;
}
