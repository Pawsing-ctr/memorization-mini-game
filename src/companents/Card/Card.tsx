import React, { useState } from "react";
import { ICard } from "../../types/types";
import "./Card.css";

interface ICardProps {
  handleClick: (id: number) => void;
  item: ICard;
  id: number;
}

const Card: React.FC<ICardProps> = ({ handleClick, item, id }) => {
  // const [item, setItem] = useState(card);
  const itemClass = item.stat ? " active " + item.stat : "";
  console.log(itemClass);

  return (
    <div className={"card-element" + itemClass} onClick={() => handleClick(id)}>
      <img src={item.src} alt="" />
    </div>
  );
};

export default Card;
