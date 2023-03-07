import React, { useEffect } from "react";

const TestA = () => {
  useEffect(() => {
    const toggleSwitch = document.querySelector(
      ".toggle-switch input[type=checkbox]"
    );
    function SwitchTheme(e) {
      if (e.target.checked) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
    toggleSwitch.addEventListener("change", SwitchTheme);
    return () => toggleSwitch.removeEventListener("change", SwitchTheme);
  }, []);

  return (
    <>
      <label
        htmlFor="toggle"
        className="toggle-switch inline-block cursor-pointer w-[100px] h-[40px] border border-[#ccc] rounded-full fixed right-5 bottom-5 z-50 p-[5px]"
      >
        <input type="checkbox" className="hidden" id="toggle" />
        <div className="w-7 h-7 bg-[#ccc] rounded-full"></div>
      </label>
      <div className="mx-auto max-w-[1200px] grid grid-cols-4 gap-x-5 p-5">
        <div className="px-5 py-8 rounded-lg border border-red-200 text-center bg-white dark:bg-slate-600 ">
          <img
            src="https://free3dicon.com/wp-content/uploads/2022/10/perspective_matte-55-264x264.png"
            alt=""
            className="mb-5 max-w-[100px] mx-auto"
          />
          <h3 className="text-lg font-semibold mb-6">Recomentdation</h3>
          <div className="text-sm leading-tight text-green-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            praesentium ipsam soluta veritatis fugit sunt blanditiis
            voluptatibus accusantium suscipit rerum. Eaque, id error repellendus
            et ipsam nemo deserunt iure obcaecati?
          </div>
        </div>
      </div>
    </>
  );
};

export default TestA;
