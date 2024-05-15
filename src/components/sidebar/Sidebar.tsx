import { categoryState } from "@/Recoil/recoilState";
import { CategoryType } from "@/types/categoryType";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";
import shortid from "shortid";

const CATEGORIES = [
  { id: shortid.generate(), label: "전체", subLabel: "All", category: "all" },
  {
    id: shortid.generate(),
    label: "아우터",
    subLabel: "Outer",
    category: "outer",
  },
  { id: shortid.generate(), label: "상의", subLabel: "Top", category: "top" },
  {
    id: shortid.generate(),
    label: "하의",
    subLabel: "Pants",
    category: "pants",
  },
  {
    id: shortid.generate(),
    label: "모자",
    subLabel: "Headwear",
    category: "headwear",
  },
  {
    id: shortid.generate(),
    label: "신발",
    subLabel: "Shoes",
    category: "shoes",
  },
];

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useRecoilState(categoryState);
  const router = useRouter();

  const selectedCategoryButtonHandler = (category: string) => {
    if (router.route === "/") {
      setSelectedCategory(category);
    } else {
      router.push("/");
      setSelectedCategory(category);
    }
  };
  return (
    <aside className="w-[260px] h-[100%] border">
      <ul>
        {CATEGORIES.map((category: CategoryType) => {
          return (
            <li
              className={`px-4 py-3 text-sm font-bold hover:bg-slate-50 ${
                selectedCategory === category.category ? "text-red-300" : ""
              }`}
              key={category.id}
            >
              <button
                onClick={() => selectedCategoryButtonHandler(category.category)}
              >
                {category.label}
                <span className="text-gray-300 ml-2 font-normal">
                  {category.subLabel}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
