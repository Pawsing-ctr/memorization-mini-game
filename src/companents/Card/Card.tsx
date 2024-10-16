import { ICard } from "../../types/types";
import "./Card.css";

interface ICardProps {
  handleClick: (id: number) => void;
  item: ICard;
  id: number;
  isCanSelectCard: boolean;
}

const Card: React.FC<ICardProps> = ({
  handleClick,
  item,
  id,
  isCanSelectCard,
}) => {
  const itemClass = item.stat ? " active " + item.stat : "";

  return (
    <div
      className={"card-element" + itemClass}
      onClick={() => isCanSelectCard && !item.stat && handleClick(id)}
    >
      <img src={item.src} alt="" />
    </div>
  );
};

export default Card;
