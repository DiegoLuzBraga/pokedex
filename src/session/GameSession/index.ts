import { action, observable } from "mobx";

interface GameData {
  title: string;
  region: string;
  pokemonEntries: string;
}

export class GameSession {
  @observable
  public gameVersionUrl: string = "";
  @observable
  public gameData: GameData = {
    title: "",
    region: "",
    pokemonEntries: "",
  };

  @action
  public setGameVersionUrl = (url: string) => {
    this.gameVersionUrl = url;
  };

  @action
  public setGameDataByField = (field: keyof GameData, data: string) => {
    this.gameData = {
      ...this.gameData,
      [field]: data,
    };
  };
}
