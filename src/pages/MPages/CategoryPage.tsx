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
      <div className="category-vertical">
        <div>
          <div className="category-message">진로는 어느 쪽인가요?</div>
          <CategoryItemsComponent history={history} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
