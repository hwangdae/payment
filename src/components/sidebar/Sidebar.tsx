import { categoryState } from "@/Recoil/recoilState";
import { CATEGORIES } from "@/mockupData/categories";
import { CategoryType } from "@/types/categoryType";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";


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
