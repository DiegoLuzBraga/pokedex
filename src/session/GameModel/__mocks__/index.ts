import { action } from "mobx";
import { GameVersion, GameVersionDetails } from "../../../@types/interfaces";
import { GameData, GameModelAbstract } from "../__abstract__";

export class GameModelMock extends GameModelAbstract {
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

	public getGameDetails = async (
		url: string,
		handleRequest: (response: GameVersionDetails) => void,
		notificate: (
			message: string,
			status: "default" | "error" | "success" | "warning" | "info"
		) => void
	) => {
		await new Promise((resolve) => {
			setTimeout(() => {
				handleRequest({
					name: "",
					names: [],
					pokemon_species: [],
					main_region: {
						name: "",
						url: "",
					},
				});
				resolve({
					url: url,
					notificate: notificate,
				});
			}, 2000);
		});
	};

	public getGames = async (
		handleRequest: (response: GameVersion) => void,
		notificate?: (
			message: string,
			status: "default" | "error" | "success" | "warning" | "info"
		) => void
	) => {
		console.log(handleRequest, notificate);
	};
}
