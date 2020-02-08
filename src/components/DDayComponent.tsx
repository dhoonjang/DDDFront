import React from "react";
import { IDday } from "../api/apiModel/MapiModel/momApi";
import xicon from "../img/x.png";

export interface IDDayComponentProps {
  dday_list: IDday[];
}

const DDayComponent: React.FC<IDDayComponentProps> = ({ dday_list }) => {
  const ddayComponents = dday_list.map((dday, index) => {
    const y = dday.date.substr(0, 4);
    const m = dday.date.substr(4, 2);
    const d = dday.date.substr(6, 2);
    const date = new Date();
    const dday_date = new Date(y + "-" + m + "-" + d);
    const dday_count = (
      (date.getTime() - dday_date.getTime()) /
      (1000 * 3600 * 24)
    ).toFixed(0);
    return (
      <div className="dday-body" key={index}>
        <img
          src={xicon}
          alt="dday-x"
          className="idday-x"
          onClick={() => console.log("dday-delete")}
        />
        <div className="name">{dday.name}</div>
        <div className="count">D{dday_count}</div>
      </div>
    );
  });

  return (
    <div className="DDay">
      <button>+ 디데이 추가하기</button>
      {ddayComponents}
    </div>
  );
};

export default DDayComponent;
