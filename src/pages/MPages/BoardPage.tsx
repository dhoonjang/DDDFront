import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Boards from "../../items/Boards";
import "../../style/BoardPage.scss";

const BoardPage: React.FC = () => {
  const params = useParams<{ board_id: string }>();

  console.log(params.board_id);

  const board = Boards.find(item => item.id === params.board_id);

  return (
    <div className="BoardPage">
      <Header />
      <h2>{board?.name}</h2>
    </div>
  );
};

export default BoardPage;
