import Generator from "./subcomponents/Generator";
import { CodeSwitch } from "./subcomponents/CodeSwitch";

export default function RightPanel({
  color,
  onColorChange,
  orientation,
  onOrientationChange,
}) {
  return (
    <div className="flex  justify-between flex-[0.5] gap-5 max-lg:flex-col-reverse max-lg:gap-20 px-4 pb-4">
      <CodeSwitch color={color} orientation={orientation} />

      <Generator
        color={color}
        onColorChange={onColorChange}
        orientation={orientation}
        onOrientationChange={onOrientationChange}
      />
    </div>
  );
}
