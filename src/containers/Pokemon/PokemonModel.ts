import { GameVersionDetails } from "../../@types/interfaces";
import { useStore } from "../../session/RootSession";
import { baseRequest } from "../../utils/baseRequest";

export const usePokemonModel = () => {
  const { gameModel } = useStore();

  const getPokemon = async (
    handleRequest: (response: GameVersionDetails) => void,
    notificate: (
      message: string,
      status: "default" | "error" | "success" | "warning" | "info"
    ) => void
  ) => {
    await baseRequest(gameModel.gameVersionUrl, handleRequest, notificate);
  };

  return { getPokemon };
};
