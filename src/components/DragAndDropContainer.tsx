import React from "react";

export default function DragAndDropContainer() {
  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: "input" | "default" | "output" | "textUpdater"
  ) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="flex flex-row gap-3 justify-around flex-wrap overflow-y-auto rounded-sm bg-white border-2 border-stone-400 w-96 h-auto py-5 px-2 shadow-xl">
      <div
        className="border-2 border-blue-500 rounded-lg size-24 flex flex-col justify-center text-center p-2 text-blue-500 font-bold"
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        <p>Input Node</p>
      </div>
      <div
        className="border-2 border-emerald-500 rounded-lg size-24 flex flex-col justify-center text-center p-2 text-emerald-500 font-bold"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        <p>Default Node</p>
      </div>
      <div
        className="border-2 border-purple-500 rounded-lg size-24 flex flex-col justify-center text-center p-2 text-purple-500 font-bold"
        onDragStart={(event) => onDragStart(event, "output")}
        draggable
      >
        <p>Output Node</p>
      </div>
      <div
        className="border-2 border-orange-500 rounded-lg size-24 flex flex-col justify-center text-center p-2 text-orange-500 font-bold"
        onDragStart={(event) => onDragStart(event, "textUpdater")}
        draggable
      >
        <p>Text Updater</p>
      </div>
    </div>
  );
}
