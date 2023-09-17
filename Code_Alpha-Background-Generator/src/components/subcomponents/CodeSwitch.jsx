import Tabs from "./Tabs";
import { useState } from "react";

export function CodeSwitch({ color, orientation }) {
  // destructuring color props
  const { color1, color2 } = color;

  // targetElements
  const copyBtn = document.querySelector(".copy-btn");

  // variables
  const current = "bg-[#1e203c]",
    dormant = "bg-[#242963]";

  // mapping tabs
  const tabs = [
    {
      label: "CSS",
      content: (
        <Tabs
          tabName="css"
          orientation={orientation}
          color1={color1}
          color2={color2}
        />
      ),
    },
    {
      label: "Tailwind",
      content: (
        <Tabs
          tabName="tailwind"
          orientation={orientation}
          color1={color1}
          color2={color2}
        />
      ),
    },
    {
      label: "React",
      content: (
        <Tabs
          tabName="react"
          orientation={orientation}
          color1={color1}
          color2={color2}
        />
      ),
    },
  ];

  // setting states
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  // handleFunctions
  const handleTabClick = (index) => {
    setActiveTab(index);
    setCopied((prevState) => false);

    if (copied && copyBtn) {
      copyBtn.textContent = "Copied";
      copyBtn.classList.add(
        "bg-gradient-to-r",
        "from-rose-400",
        "via-fuchsia-500",
        "to-indigo-500"
      );
    } else if (!copied && copyBtn) {
      copyBtn.textContent = "Copy";
      copyBtn.classList.remove(
        "bg-gradient-to-r",
        "from-rose-400",
        "via-fuchsia-500",
        "to-indigo-500"
      );
    }
  };

  const handleCopyCode = (e) => {
    setCopied((prevState) => !prevState);

    copied && (copyBtn.innerHTML = "Copied");

    // Copy Handle Actual
    let copiedText = document.querySelector(".tab-content").textContent;
    navigator.clipboard.writeText(copiedText).catch((error) => {
      alert(`Not Copied Error:${error}`);
    });

    if (copied && copyBtn) {
      copyBtn.textContent = "Copied";
      copyBtn.classList.add(
        "bg-gradient-to-r",
        "from-rose-400",
        "via-fuchsia-500",
        "to-indigo-500"
      );
    } else if (!copied && copyBtn) {
      copyBtn.textContent = "Copy";
      copyBtn.classList.remove(
        "bg-gradient-to-r",
        "from-rose-400",
        "via-fuchsia-500",
        "to-indigo-500"
      );
    }
  };

  return (
    <>
      {/* Code Part */}

      <div className="w-full max-lg:relative max-lg:flex font-[500] flex-[0.5] mx-auto rounded-[1rem] overflow-hidden shadow-card border-card bg-[#1e203c]">
        {/* Tab with Code Snippet */}
        <div className="code head lg:relative bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
          {/* Code Tabs */}
          <div className="code__navbar flex max-lg:flex-col text-[15px] w-[25rem] max-lg:w-[4.5rem]">
            {/* Everytime a function calls it update itself */}
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`${
                  index === activeTab ? current : dormant
                } flex justify-center items-center text-white w-full h-12 active:bg-[#212552] transition-all`}
                onClick={() => handleTabClick(index)}
              >
                {tab.label}
              </button>
            ))}
            <button
              onClick={handleCopyCode}
              className="copy-btn absolute right-3 max-lg:bottom-3 lg:top-0 lg:bottom-0 my-auto w-16 flex justify-center items-center h-10 rounded-[0.25rem] bg-gray-500  text-white transition-all"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Code Display Snippets */}
        <div className="tab-content w-full h-full flex text-white ">
          {tabs[activeTab].content}
        </div>
      </div>
    </>
  );
}
