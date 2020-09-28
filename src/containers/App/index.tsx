import { SnackbarProvider } from "notistack";
import React from "react";
import { GamesList } from "../GamesList/index";
import s from "./style.scss";

export const App = () => {
  return (
    <SnackbarProvider preventDuplicate maxSnack={3}>
      <div className={s.app}>
        <GamesList />
      </div>
    </SnackbarProvider>
  );
};
