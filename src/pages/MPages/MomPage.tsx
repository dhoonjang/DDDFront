import React from "react";
import { useHistory } from "react-router-dom";
import { useApiModel } from "../../api/apiFuncs";
import { momApi } from "../../api/apiModel";
import {
  IMomApiReturn,
  TMomApiParameter
} from "../../api/apiModel/MapiModel/momApi";
import BoardsComponent from "../../components/BoardsComponent";
import DDayComponent from "../../components/DDayComponent";
import Header from "../../components/Header";
import CategoryItems from "../../items/CategoryItems";
import { useAuthAction } from "../../store/storeFuncs";
import "../../style/MomPage.scss";

const MomPage: React.FC = () => {
  const history = useHistory();
  const { unAuthorized } = useAuthAction();

  const momApiParameter: TMomApiParameter = [];
  const momData: IMomApiReturn = useApiModel(momApi, momApiParameter);

  const bigCat = CategoryItems.find(item => item.id === momData?.data?.big_cat);
  const mediumCat = bigCat?.children?.find(
    item => item.id === momData?.data?.medium_cat
  );

  return (
    <div className="MomPage">
      <Header unAuthorized={unAuthorized} />
      <div className="mom-flex">
        <div className="mom-sidebox">
          <div className="mom-info">
            내가 선택한 계열
            <div className="mom-category">
              {bigCat?.name} > {mediumCat?.name}
            </div>
            내 학교
            <div className="mom-hs">
              {momData?.data?.user_info.high_school}
              <div className="hs-grade">
                {momData?.data?.user_info.grade}학년
              </div>
            </div>
          </div>
          {momData?.data?.d_day && (
            <DDayComponent dday_list={momData?.data?.d_day} />
          )}
        </div>
        <BoardsComponent history={history} />
      </div>
    </div>
  );
};

export default MomPage;
