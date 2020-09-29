import { RouterStore } from "mobx-react-router";
import { History } from "history";

export abstract class AbstractRootStore {
  public abstract routerStore: RouterStore;
  public abstract history: History;
}
