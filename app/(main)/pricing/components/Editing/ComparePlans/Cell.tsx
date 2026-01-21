/** @format */

import React from "react";

type CellProps = {
  children: React.ReactNode;
  left?: boolean;
  highlight?: boolean;
};

export default function Cell({ children, left, highlight }: CellProps) {
  return (
    <div
      className={`py-6 px-2 flex items-center justify-center  
      ${left ? "justify-start font-normal lg:font-medium text-sm bg-white/20" : "bg-white/20"}
      ${highlight ? "bg-white/10" : "bg-white/10"}`}>
      {children}
    </div>
  );
}
