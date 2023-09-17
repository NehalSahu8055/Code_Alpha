export default function LeftPanel({ color, orientation }) {
  // Component Background Generator
  const { color1, color2 } = color;
  const gradientStyle = {
    backgroundImage: `linear-gradient(${orientation.cssOri}, ${color1}, ${color2})`,
  };
  return (
    <div
      style={gradientStyle}
      className={`gradient-generator flex-[0.5] min-h-[18rem] rounded-[7rem] transition-[background] duration-700`}
    ></div>
  );
  // #86b186, #a3d6f0
}
