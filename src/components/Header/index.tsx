import React from "react";
import { ArrowLeft } from "../icons/ArrowLeft/arrowLeft";
import s from "./style.scss";

interface HeaderProps {
  goBack?: () => void;
  title: string;
}

export const Header = ({ goBack, title }: HeaderProps) => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        {goBack && <ArrowLeft onClick={goBack} />}
        <span>{title}</span>
      </nav>
    </header>
  );
};
