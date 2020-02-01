import React from "react";
import CategoryItems, { ICategoryItems } from "../items/CategoryItems";
import { IHistory, RouteUrlMove } from "../tool/urlTool";

const makeCategoryItemsDiv = (items: ICategoryItems, history: IHistory) => {
  return items.items.map((item, index) => {
    const moveCategoryItemPage = () => {
      RouteUrlMove(history, `/category/${item.name}`);
    };
    return (
      <div key={index} onClick={moveCategoryItemPage}>
        {item.name}
      </div>
    );
  });
};

const CategoryItemsComponent: React.FC<{ history: IHistory }> = ({
  history
}) => {
  const categoryItems = makeCategoryItemsDiv(CategoryItems, history);
  return <div className="CategoryItems">{categoryItems}</div>;
};

export default CategoryItemsComponent;
