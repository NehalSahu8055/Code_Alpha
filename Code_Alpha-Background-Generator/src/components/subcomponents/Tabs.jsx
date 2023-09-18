export default function Tabs({ tabName, orientation, color1, color2 }) {
  const tabData = {
    css: (
      <code className="css-code flex flex-col px-6 py-4">
        <span className="text-green-400">
          background:{" "}
          <span className="text-violet-200">
            linear-gradient({orientation.cssOri}, {color1}, {color2})
          </span>
        </span>
      </code>
    ),
    tailwind: (
      <code className="tailwind-code flex flex-col px-6 py-4">
        <span className="text-green-400">
          bg-gradient-to-{orientation.custom}{" "}
          <span className="text-violet-200">
            from-[{color1}] to-[{color2}]
          </span>
        </span>
      </code>
    ),
    react: (
      <code className="react-code flex flex-col px-6 py-4">
        <span className="text-orange-300">
          style= {""}
          <span className="text-violet-200">
            &#123;&#123;{" "}
            <span className="text-green-400">backgroundImage: </span>{" "}
            linear-gradient({orientation.cssOri}, {color1}, {color2})
            &#125;&#125;
          </span>
        </span>
      </code>
    ),
  };
  return tabData[tabName];
}
