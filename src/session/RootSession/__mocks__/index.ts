import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import { History, createBrowserHistory } from "history";
import { createContext } from "react";
import { AbstractRootStore } from "../__abstract__";
import { GameModelMock } from "../../GameModel/__mocks__";

export class RootStoreMock extends AbstractRootStore {
	public routerStore: RouterStore;
	public history: History;
	public gameModel: GameModelMock;

	public constructor() {
		super();
		const browerHistory = createBrowserHistory();
		this.routerStore = new RouterStore();
		this.history = syncHistoryWithStore(browerHistory, this.routerStore);
		this.gameModel = new GameModelMock();

		return {
			routerStore: this.routerStore,
			history: this.history,
			gameModel: this.gameModel,
		};
	}
}

export const rootStoreMock = new RootStoreMock();
export const rootStoreContextMock = createContext(rootStoreMock);
