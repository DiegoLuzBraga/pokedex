import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import { History, createBrowserHistory } from "history";
import { createContext, useContext } from "react";
import { GameSession } from "../GameSession";

export class RootStore {
  public routerStore: RouterStore;
  public history: History;
  public gameSession: GameSession;

  public constructor() {
    const browerHistory = createBrowserHistory();
    this.routerStore = new RouterStore();
    this.history = syncHistoryWithStore(browerHistory, this.routerStore);
    this.gameSession = new GameSession();

    return {
      routerStore: this.routerStore,
      history: this.history,
      gameSession: this.gameSession,
    };
  }
}

export const rootStore = new RootStore();
export const rootStoreContext = createContext(rootStore);
export let useStore = (): RootStore => {
  return useContext(rootStoreContext);
};
