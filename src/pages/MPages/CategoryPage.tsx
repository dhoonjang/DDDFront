import React from "react";
import Header from "../../components/Header";
import { useAuthAction } from "../../store/storeFuncs";

const CategoryPage: React.FC = () => {
  const { unAuthorized } = useAuthAction();
  return (
    <div className="CategoryPage">
      <Header unAuthorized={unAuthorized} />
      <br />
      <h2>Category Page</h2>
    </div>
  );
};

export default CategoryPage;
