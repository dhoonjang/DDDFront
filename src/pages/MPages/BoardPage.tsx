import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";

const BoardPage: React.FC = () => {
  const params = useParams<{ board_id: string }>();

  console.log(params.board_id);

  return (
    <div className="BoardPage">
      <Header />
      <h2>Board Page</h2>
    </div>
  );
};

export default BoardPage;
