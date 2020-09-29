import React from "react";
import { Header } from '../../components/Header';
import { Loading } from "../../components/Loading";
import { Selector } from "../../components/Selector";
import { gameTitleFormat } from "../../utils/gameTitleFormat";
import { useGameListViewModel } from "./GameListViewModel";
import s from "./style.scss";

export const GamesList = () => {
  const {
    gameList,
    loading,
    handleLoadMoreClick,
    handleGameClick
  } = useGameListViewModel();

  return loading ? (
    <Loading />
  ) : (
    <>
      <Header title="Choose your Pokemon game!" />
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
        {gameList.next && (
          <button className={s.loadMore} onClick={handleLoadMoreClick}>
            Load more games!
          </button>
        )}
      </div>
    </>
  );
};
