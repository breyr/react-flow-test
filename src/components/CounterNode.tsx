import { Handle, Node, NodeProps, Position } from "@xyflow/react";
import { useState } from "react";

export type CounterNode = Node<
  {
    initialCount?: number;
  },
  "counter"
>;

export default function TextUpdaterNode(props: NodeProps<CounterNode>) {
  const [count, setCount] = useState(props.data?.initialCount ?? 0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <Handle
        type="target"
        position={Position.Top}
        className="w-5 bg-teal-500"
      />
      <div>
        <button onClick={decrement} className="font-bold">
          -
        </button>
        <span>{count}</span>
        <button onClick={increment} className="font-bold">
          +
        </button>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        className="w-5 bg-teal-500"
      />
    </div>
  );
}
