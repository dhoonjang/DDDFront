import React from "react";
import Boards, { IBoard } from "../items/Boards";
import { IHistory, RouteUrlMove } from "../tool/urlTool";
import { BlockImg } from "./simpleComponents";

const makeBoardsDiv = (items: IBoard[], history: IHistory) => {
  return items.map((item, index) => {
    const moveCategoryItemPage = () => {
      RouteUrlMove(history, `/board/${item.id}`);
    };
    return (
      <div
        id={item.id}
        key={index}
        onClick={moveCategoryItemPage}
        className="board"
        draggable={true}
        onDragStart={event => console.log(event.currentTarget.id)}
        onDragOver={event => event.preventDefault()}
        onDrop={event => console.log(event.currentTarget.id)}
      >
        <BlockImg className="iboard" src={item.img} />
        <BlockImg className="iboard-white" src={item.wimg} />
        <div className="name">{item.name}</div>
        <div className="discription">{item.discription}</div>
      </div>
    );
  });
};

const BoardsComponent: React.FC<{ history: IHistory }> = ({ history }) => {
  const boards = makeBoardsDiv(Boards, history);
  return <div className="Boards">{boards}</div>;
};

export default BoardsComponent;
