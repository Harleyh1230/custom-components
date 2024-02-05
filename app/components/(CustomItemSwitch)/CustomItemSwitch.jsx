"use client";
import { useState } from "react";

const items = [
  { text: "Text 1", image: "https://placehold.co/600x400/pink/white" },
  { text: "Text 2", image: "https://placehold.co/600x400/cyan/white" },
  { text: "Text 3", image: "https://placehold.co/600x400/red/white" },
  { text: "Text 4", image: "https://placehold.co/600x400/dimgray/white" },
  { text: "Text 5", image: "https://placehold.co/600x400/fuchsia/white" },
  { text: "Text 6", image: "https://placehold.co/600x400/lime/white" },
  { text: "Text 7", image: "https://placehold.co/600x400/navy/white" },
  { text: "Text 8", image: "https://placehold.co/600x400/olive/white" },
];

export default function CustomItemSwitch() {
  const [activeItem, setActiveItem] = useState(items[0]);

  return (
    <div>
      <div>
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveItem(item)}
            className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 ${
              activeItem === item ? "bg-green-50" : "bg-gray-50"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div>
        <h2>{activeItem.text}</h2>
        <img src={activeItem.image} alt="Active Item" />
      </div>
    </div>
  );
}
