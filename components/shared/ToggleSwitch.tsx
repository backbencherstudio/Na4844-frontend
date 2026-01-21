"use client";

import { useState, useEffect } from "react";

interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

const ToggleSwitch = ({ checked = false, onChange }: ToggleSwitchProps) => {
  const [isOn, setIsOn] = useState(checked);

  useEffect(() => {
    setIsOn(checked);
  }, [checked]);

  const handleToggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    onChange?.(newValue);
  };

  return (
    <label
      className="relative flex items-center w-[58px] h-8 rounded-full cursor-pointer px-1 transition-all duration-300 shadow-[inset_0_1px_3px_rgba(0,0,0,0.18)] bg-[#e8ebf0] peer-checked:bg-[#dbe7ff]"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <input
        type="checkbox"
        className="peer sr-only"
        checked={isOn}
        onChange={handleToggle}
      />

      <span
        className={`absolute left-1 w-6 h-6 rounded-full bg-[#1e88ff] shadow-[0_2px_6px_rgba(30,136,255,0.5)] transition-all duration-300 ${
          isOn ? "translate-x-[26px]" : "translate-x-0"
        }`}
      ></span>
    </label>
  );
};

export default ToggleSwitch;
