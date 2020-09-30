import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import { History, createBrowserHistory } from "history";
import { createContext, useContext } from "react";
import { GameModel } from "../GameModel";
import { AbstractRootStore } from "./__abstract__";
import { rootStoreContextMock, RootStoreMock } from "./__mocks__";

export class RootStore extends AbstractRootStore {
  public routerStore: RouterStore;
  public history: History;
  public gameModel: GameModel;

  public constructor() {
    super();
    const browerHistory = createBrowserHistory();
    this.routerStore = new RouterStore();
    this.history = syncHistoryWithStore(browerHistory, this.routerStore);
    this.gameModel = new GameModel();

    return {
      routerStore: this.routerStore,
      history: this.history,
      gameModel: this.gameModel
    };
  }
}

export const rootStore = new RootStore();
export const rootStoreContext = createContext(rootStore);
export let useStore = (): RootStore | RootStoreMock => {
  return useContext(rootStoreContext);
};

if (process.env.UNIT_TEST) {
  useStore = () => {
    return useContext(rootStoreContextMock);
  };
}
