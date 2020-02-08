import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "../../components/Header";
import CategoryItems, { ICategoryItem } from "../../items/CategoryItems";
import { useAuthAction, useUserAction } from "../../store/storeFuncs";
import "../../style/CategoryItemPage.scss";
import { RouteUrlMove } from "../../tool/urlTool";

const CategoryItemPage: React.FC = () => {
  const history = useHistory();
  const params = useParams<{ category_id: string }>();
  const { unAuthorized } = useAuthAction();
  const { setUserStatus } = useUserAction();

  const setBoardCategory = () => {
    setUserStatus("01");
    RouteUrlMove(history, "/board");
  };

  const Item: ICategoryItem | undefined = CategoryItems.find(
    item => item.id === params.category_id
  );

  return (
    <div className="CategoryItemPage">
      <Header unAuthorized={unAuthorized} />
      <h2 onClick={setBoardCategory}>{Item?.name}</h2>
    </div>
  );
};

export default CategoryItemPage;
