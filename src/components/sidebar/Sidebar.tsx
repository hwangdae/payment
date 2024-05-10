import React from "react";
import shortid from "shortid";

const CATEGORIES = [
  { id: shortid.generate(), label: "아우터",subLabel:"Outer", category: "outer" },
  { id: shortid.generate(), label: "상의", subLabel:"Top",category: "top" },
  { id: shortid.generate(), label: "하의", subLabel:"Pants",category: "pants" },
  { id: shortid.generate(), label: "모자", subLabel:"Headwear",category: "headwear" },
  { id: shortid.generate(), label: "신발", subLabel:"Shoes",category: "shoes" },
];

const Sidebar = () => {
  return (
    <aside className="w-[260px] border">
      <ul className="px-4 py-1">
        {CATEGORIES.map((category) => {
          return <li className="py-3 px-1 border-b-1 text-sm font-bold hover:bg-gray-100" key={category.id}>{category.label}<span className="text-gray-300 ml-2 font-normal">{category.subLabel}</span></li>;
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
