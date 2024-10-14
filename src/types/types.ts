import { StatusesEnum } from "../constants/statuses";

export interface ICard {
  id: number;
  src: string;
  stat: StatusesEnum | null;
}
