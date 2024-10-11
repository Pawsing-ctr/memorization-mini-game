import React, { useState } from "react";
import { card } from "../../constants/card";
import "../Game/Game.css";
import { ICard } from "../../types/types";
import Card from "../Card/Card";

const Game: React.FC = () => {
  const [cards, setCards] = useState<ICard[]>(card); // ICard[] = массив {}
  const [prev, setPrev] = useState(-1);

  const check = (current: number) => {
    if (cards[current].id === cards[prev].id) {
      cards[current].stat = "correct";
      cards[prev].stat = "correct";
      setCards([...cards]);
      setPrev(-1);
    } else {
      cards[current].stat = "wrong";
      cards[prev].stat = "wrong";
      setCards([...cards]);
      setTimeout(() => {
        cards[current].stat = "";
        cards[prev].stat = "";
        setCards([...cards]);
        setPrev(-1);
      }, 1000);
    }
  };

  const handleClick = (id: number) => {
    if (prev === -1) {
      cards[id].stat = "active";
      setCards([...cards]);
      setPrev(id);
    } else {
      check(id);
    }
  };

  return (
    <div className="all-game-page">
      <h1 className="title-text">Игра на память</h1>
      <div className="cards">
        {cards.map((item, index) => {
          return (
            <Card
              key={index}
              item={item}
              id={index}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Game;
