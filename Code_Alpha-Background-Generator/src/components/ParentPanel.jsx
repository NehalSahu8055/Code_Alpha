import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import { useState } from "react";

export default function ParentPanel() {
  // Intial State Colors
  const [color, setColors] = useState({
    color1: "#84E1EB",
    color2: "#E385EA",
  });

  const [orientation, setOrientation] = useState({
    cssOri: "to right",
    custom: "r",
  });

  const handleOrientation = (e) => {
    const { name, value, dataset } = e.target;
    setOrientation((prevOrientation) => ({
      custom: dataset.tailwind,
      cssOri: value,
    }));
  };

  const handleColorChange = (e) => {
    const { name, value } = e.target;

    setColors((prevColor) => ({
      ...prevColor,
      [name]: value,
    }));
  };
  return (
    <main className="font-mont bg-[url('/bgg.jpg')] bg-no-repeat bg-cover flex flex-col min-h-screen  gap-5 justify-between md:p-4 p-2 ">
      <LeftPanel color={color} orientation={orientation} />
      <RightPanel
        color={color}
        onColorChange={handleColorChange}
        orientation={orientation}
        onOrientationChange={handleOrientation}
      />
    </main>
  );
}
