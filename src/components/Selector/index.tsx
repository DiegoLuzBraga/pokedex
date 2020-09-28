import React from "react";
import s from "./style.scss";

interface SelectorProps {
  title: string;
}

export const Selector = ({ title }: SelectorProps) => {
  return (
    <div className={s.card}>
      <h2>{title}</h2>
    </div>
  );
};
