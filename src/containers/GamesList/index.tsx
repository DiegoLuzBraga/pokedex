import React from "react";
import { Error } from "../../components/Error";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Selector } from "../../components/Selector";
import { gameTitleFormat } from "../../utils/gameTitleFormat";
import { useGameListViewModel } from "./GameListViewModel";
import s from "./style.scss";

export const GamesList = () => {
  const { gameList, loading, handleGameClick } = useGameListViewModel();

  return loading ? (
    <Loading />
  ) : gameList.results.length ? (
    <>
      <Header title="Choose your Pokemon generation!" />
      <div className={s.gamelist}>
        {gameList.results.map((game, index) => {
          return (
            <Selector
              key={`${game.name}${index}`}
              title={gameTitleFormat(game.name)}
              onClickGame={() => handleGameClick(game.url)}
            />
          );
        })}
      </div>
    </>
  ) : (
    <Error />
  );
};
