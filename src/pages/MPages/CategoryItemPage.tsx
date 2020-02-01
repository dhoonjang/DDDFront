import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "../../components/Header";
import CategoryItems from "../../items/CategoryItems";
import { useAuthAction, useUserAction } from "../../store/storeFuncs";
import "../../style/CategoryItemPage.scss";
import { RouteUrlMove } from "../../tool/urlTool";

const CategoryItemPage: React.FC = () => {
  const history = useHistory();
  const params = useParams<{ item: string }>();
  const { unAuthorized } = useAuthAction();
  const { setUserStatus } = useUserAction();

  const setBoardCategory = () => {
    setUserStatus("01");
    RouteUrlMove(history, "/mom");
  };

  const Item = CategoryItems.items.filter(item => item.name === params.item);

  console.log(Item[0]);
  return (
    <div className="CategoryItemPage">
      <Header unAuthorized={unAuthorized} />
      <h2 onClick={setBoardCategory}>{params.item}</h2>
      {Item[0].discription}
    </div>
  );
};

export default CategoryItemPage;
