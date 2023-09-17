import { Icon } from "@iconify/react";
export default function Generator({
  color,
  onColorChange,
  orientation,
  onOrientationChange,
}) {
  // destructuring color props
  const { color1, color2 } = color;
  const value = "to right";
  return (
    <>
      {/* Gradient Generator  */}
      <form className="flex flex-col flex-[0.5] justify-center gap-3">
        <div className="css-orientation flex flex-[0.2]  justify-center items-center bg-[#1e203c] rounded-[1rem] gap-5 py-4 flex-wrap px-2">
          <input
            type="radio"
            name="css-ori"
            value="to right top"
            id="radio1"
            data-tailwind="tr"
            className="hidden"
            checked={orientation.custom == "tr"}
            onChange={onOrientationChange}
          />
          <label
            className={`rLab hover:bg-[#242647] transition-all cursor-pointer border w-10 h-10 flex justify-center items-center rounded-full ${
              orientation.custom === "tr"
                ? "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
                : "bg-transparent"
            }`}
            htmlFor="radio1"
          >
            <Icon icon="iconoir:arrow-tr" color="white" width={25} />
          </label>

          <input
            type="radio"
            name="css-ori"
            value="to right bottom"
            id="radio3"
            data-tailwind="br"
            className="hidden"
            checked={orientation.custom == "br"}
            onChange={onOrientationChange}
          />
          <label
            className={`rLab hover:bg-[#242647] transition-all cursor-pointer border w-10 h-10 flex justify-center items-center rounded-full ${
              orientation.custom === "br"
                ? "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
                : "bg-transparent"
            }`}
            htmlFor="radio3"
          >
            <Icon icon="iconoir:arrow-br" color="white" width={25} />
          </label>

          <input
            type="radio"
            name="css-ori"
            value="to bottom"
            id="radio4"
            data-tailwind="b"
            className="hidden"
            checked={orientation.custom == "b"}
            onChange={onOrientationChange}
          />
          <label
            className={`rLab hover:bg-[#242647] transition-all cursor-pointer border w-10 h-10 flex justify-center items-center rounded-full ${
              orientation.custom === "b"
                ? "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
                : "bg-transparent"
            }`}
            htmlFor="radio4"
          >
            <Icon icon="iconoir:arrow-down" color="white" width={25} />
          </label>

          <input
            type="radio"
            name="css-ori"
            value="to left bottom"
            id="radio5"
            data-tailwind="bl"
            className="hidden"
            checked={orientation.custom == "bl"}
            onChange={onOrientationChange}
          />
          <label
            className={`rLab hover:bg-[#242647] transition-all cursor-pointer border w-10 h-10 flex justify-center items-center rounded-full ${
              orientation.custom === "bl"
                ? "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
                : "bg-transparent"
            }`}
            htmlFor="radio5"
          >
            <Icon icon="iconoir:arrow-bl" color="white" width={25} />
          </label>

          <input
            type="radio"
            name="css-ori"
            value="to left"
            id="radio6"
            data-tailwind="l"
            className="hidden"
            checked={orientation.custom == "l"}
            onChange={onOrientationChange}
          />
          <label
            className={`rLab hover:bg-[#242647] transition-all cursor-pointer border w-10 h-10 flex justify-center items-center rounded-full ${
              orientation.custom === "l"
                ? "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
                : "bg-transparent"
            }`}
            htmlFor="radio6"
          >
            <Icon icon="iconoir:arrow-left" color="white" width={25} />
          </label>

          <input
            type="radio"
            name="css-ori"
            value="to left top"
            id="radio7"
            data-tailwind="tl"
            className="hidden"
            checked={orientation.custom == "tl"}
            onChange={onOrientationChange}
          />
          <label
            className={`rLab hover:bg-[#242647] transition-all cursor-pointer border w-10 h-10 flex justify-center items-center rounded-full ${
              orientation.custom === "tl"
                ? "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
                : "bg-transparent"
            }`}
            htmlFor="radio7"
          >
            <Icon icon="iconoir:arrow-tl" color="white" width={25} />
          </label>

          <input
            type="radio"
            name="css-ori"
            value="to top"
            id="radio8"
            data-tailwind="t"
            className="hidden"
            checked={orientation.custom == "t"}
            onChange={onOrientationChange}
          />
          <label
            className={`rLab hover:bg-[#242647] transition-all cursor-pointer border w-10 h-10 flex justify-center items-center rounded-full ${
              orientation.custom === "t"
                ? "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
                : "bg-transparent"
            }`}
            htmlFor="radio8"
          >
            <Icon icon="iconoir:arrow-up" color="white" width={25} />
          </label>
        </div>
        <div className="inputs flex-[0.8] h-full flex gap-3 justify-between ">
          <input
            name="color1"
            onChange={onColorChange}
            className="flex-[0.5] w-full h-full max-lg:h-[5rem] border-none cursor-pointer bg-transparent "
            type="color"
            value={color1}
            title="Pick first Color"
          />
          <input
            name="color2"
            onChange={onColorChange}
            className="flex-[0.5] w-full h-full max-lg:h-[5rem] border-none cursor-pointer bg-transparent "
            type="color"
            value={color2}
            title="Pick Second Color"
          />
        </div>
      </form>
    </>
  );
}
