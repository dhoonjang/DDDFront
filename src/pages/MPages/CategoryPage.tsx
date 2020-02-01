import React from "react";
import { useHistory } from "react-router-dom";
import CategoryItemsComponent from "../../components/CategoryItemsComponent";
import Header from "../../components/Header";
import { useAuthAction } from "../../store/storeFuncs";
import "../../style/CategoryPage.scss";

const CategoryPage: React.FC = () => {
  const history = useHistory();
  const { unAuthorized } = useAuthAction();

  return (
    <div className="CategoryPage">
      <Header unAuthorized={unAuthorized} />
      <div className="category-message">어느 쪽으로 진학하실 생각인가요?</div>
      <div className="category-select-box">
        <select defaultValue="default">
          <option value="default">모든 계열 보기</option>
        </select>
      </div>
      <CategoryItemsComponent history={history} />
    </div>
  );
};

export default CategoryPage;
