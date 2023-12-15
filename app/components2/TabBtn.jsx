import React from "react";

const TabBtn = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-primary-500"
    : " text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabBtn;
