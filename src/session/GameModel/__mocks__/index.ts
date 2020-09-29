import { action } from "mobx";
import { GameData, GameModelAbstract } from "../__abstract__";

export class GameModel extends GameModelAbstract {
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
