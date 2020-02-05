import React from "react";
import CategoryItems, { ICategoryItems } from "../items/CategoryItems";
import { IHistory, RouteUrlMove } from "../tool/urlTool";
import { BlockImg } from "./simpleComponents";

const makeCategoryItemsDiv = (items: ICategoryItems, history: IHistory) => {
  return items.items.map((item, index) => {
    const moveCategoryItemPage = () => {
      RouteUrlMove(history, `/category/${item.id}`);
    };
    const children = item.children?.map(child => `${child.name}, `);
    return (
      <div key={index} onClick={moveCategoryItemPage} className="category-item">
        <div className="cover" />
        <BlockImg className="icategory" src={item.img} />
        <div className="category-body">
          <div className="category-name">{item.name}</div>
          <div className="category-children">{children}</div>
        </div>
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
