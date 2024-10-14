import React, { useEffect, useState } from "react";
import { card } from "../../constants/card";
import "../Game/Game.css";
import { ICard } from "../../types/types";
import Card from "../Card/Card";
import Time from "../Time/Time";
import ReactModal from "react-modal";
import { StatusesEnum } from "../../constants/statuses";

const Game: React.FC = () => {
  const [cards, setCards] = useState<ICard[]>(card); // ICard[] = массив {}
  const [prev, setPrev] = useState(-1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [isCanSelectCard, setIsCanSelectCard] = useState(true);

  const totalPairs = cards.length / 2;
  useEffect(() => {
    if (matchedPairs === totalPairs) {
      setTimeout(() => {
        setIsOpenModal(true);
      }, 1000);
    }
  }, [matchedPairs, totalPairs]);

  const check = (current: number) => {
    if (cards[current].id === cards[prev].id) {
      cards[current].stat = StatusesEnum.Correct;
      cards[prev].stat = StatusesEnum.Correct;
      setMatchedPairs((prev) => prev + 1);
      setCards([...cards]);
      setPrev(-1);
    } else {
      setIsCanSelectCard(false);
      cards[current].stat = StatusesEnum.Wrong;
      cards[prev].stat = StatusesEnum.Wrong;
      setCards([...cards]);
      setTimeout(() => {
        cards[current].stat = null;
        cards[prev].stat = null;
        setCards([...cards]);
        setPrev(-1);
        setIsCanSelectCard(true);
      }, 1000);
    }
  };

  const handleClick = (id: number) => {
    if (prev === -1) {
      cards[id].stat = StatusesEnum.Active;
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
              isCanSelectCard={isCanSelectCard}
            />
          );
        })}
      </div>
      <Time text={"Вы играете"} isOpenModal={isOpenModal} />

      <ReactModal
        shouldCloseOnOverlayClick={true}
        className={"modal"}
        isOpen={isOpenModal}
        overlayClassName="modal-overlay"
      >
        <Time text={"Вы победили за"} isOpenModal={isOpenModal} />
        <div>qwerwqer</div>
        <div>qwerwqer</div>
        <div>qwerwqer</div>
        <div>qwerwqer</div>
      </ReactModal>
    </div>
  );
};

export default Game;
