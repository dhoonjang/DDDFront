import React from "react";
import CategoryItems, { ICategoryItems } from "../items/CategoryItems";

const makeCategoryItemsDiv = (items: ICategoryItems) => {
  return items.items.map((item, index) => {
    return <div key={index}>{item.name}</div>;
  });
};

const CategoryItemsComponent: React.FC = () => {
  const categoryItems = makeCategoryItemsDiv(CategoryItems);
  return <div className="CategorItems">{categoryItems}</div>;
};

export default CategoryItemsComponent;
