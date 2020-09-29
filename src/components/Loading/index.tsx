import React from "react";
import s from "./style.scss";

export const Loading = () => {
  return (
    <div className={s.imageLayer}>
      <img
        className={s.image}
        src="https://i.pinimg.com/originals/9f/b1/25/9fb125f1fedc8cc62ab5b20699ebd87d.gif"
      />
      <span>Loading...</span>
    </div>
  );
};
