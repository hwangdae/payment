import shortid from "shortid";

export const CATEGORIES = [
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