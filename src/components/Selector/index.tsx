import React from "react";
import s from "./style.scss";

interface SelectorProps {
  title: string;
  onClickGame: () => void;
}

export const Selector = ({ title, onClickGame }: SelectorProps) => {
  return (
    <div className={s.card} onClick={onClickGame}>
      <h2>Pokemon {title}</h2>
    </div>
  );
};
