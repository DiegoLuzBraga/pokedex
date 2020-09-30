import React from "react";
import s from "./style.scss";

export const Error = () => {
  return (
    <div className={s.error}>
      <p>Sorry, no pokemon caught</p>
      <img src="https://www.gamebyte.com/wp-content/uploads/2019/06/Pikachu-1-700x467.jpg" />
    </div>
  );
};
