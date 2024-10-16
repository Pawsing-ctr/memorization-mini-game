import React, { useEffect, useLayoutEffect, useState } from "react";
import { card } from "../../constants/card";
import "../Game/Game.css";
import { ICard } from "../../types/types";
import Card from "../Card/Card";
import Time from "../Time/Time";
import ReactModal from "react-modal";
import { StatusesEnum } from "../../constants/statuses";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutePass } from "../../constants/routePass";
import Button from "../Button/Button";
import Confetti from "react-confetti";

const Game: React.FC = () => {
  const location = useLocation();
  const pairs = location.state;
  const [cards, setCards] = useState<ICard[]>(
    card.slice(0, pairs * 2).sort(() => Math.random() - 0.5)
  ); // ICard[] = массив {}
  const [prev, setPrev] = useState(-1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [isCanSelectCard, setIsCanSelectCard] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  const navigate = useNavigate();

  const handleButtonReturnHome = () => {
    navigate(RoutePass.Home);
  };

  const totalPairs = cards.length / 2;
  useEffect(() => {
    if (matchedPairs === totalPairs) {
      setTimeout(() => {
        setIsOpenModal(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3500);
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

  const returnDefaultCard = () => {
    setCards((prev) =>
      prev
        .map((card) => {
          card.stat = null;
          return card;
        })
        .sort(() => Math.random() - 0.5)
    );
    setSeconds(0);
  };

  useEffect(() => {
    let timeOut: NodeJS.Timeout;
    if (isActive) {
      timeOut = setTimeout(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    if (isOpenModal === true) {
      setIsActive(false);
    }
    return () => clearTimeout(timeOut);
  }, [isActive, seconds, isOpenModal, setSeconds]);

  return (
    <div className="all-game-page">
      <h1 className="title-text">Игра на память</h1>
      <Button
        onClick={returnDefaultCard}
        content={"Начать заново"}
        className={"start-button"}
      />
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
      <Time seconds={seconds} text={"Вы играете"} />

      <ReactModal
        shouldCloseOnOverlayClick={true}
        className={"modal"}
        isOpen={isOpenModal}
        overlayClassName="modal-overlay"
      >
        <Time seconds={seconds} text={"Вы победили за"} />

        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={500}
          />
        )}

        <Button
          onClick={handleButtonReturnHome}
          content={"Вернуться в меню"}
          className={"start-button"}
        />
      </ReactModal>
    </div>
  );
};

export default Game;
