import { action, observable } from "mobx";
import { GameVersion, GameVersionDetails } from "../../../@types/interfaces";

export interface GameData {
  title: string;
  region: string;
  pokemonEntries: string;
}

export abstract class GameModelAbstract {
  public abstract getGames: (
    handleRequest: (response: GameVersion) => void,
    notificate: (
      message: string,
      status: "default" | "error" | "success" | "warning" | "info"
    ) => void
  ) => Promise<void>;
  public abstract getGameDetails: (
    url: string,
    handleRequest: (response: GameVersionDetails) => void,
    notificate: (
      message: string,
      status: "default" | "error" | "success" | "warning" | "info"
    ) => void
  ) => Promise<void>;

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
