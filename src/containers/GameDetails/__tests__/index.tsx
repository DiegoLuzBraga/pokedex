import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { GameDetails } from "..";
import { render } from "@testing-library/react";
import { rootStoreMock } from "../../../session/RootSession/__mocks__";
import { SnackbarProvider } from "notistack";

beforeEach(() => {
	rootStoreMock.gameModel.setGameVersionUrl("");
});

describe("<GameDetails /> test case", () => {
	jest.mock("notistack", () => ({
		useSnackbar: jest.fn(),
	}));
	test("render <GameDetails />", () => {
		rootStoreMock.routerStore.push("/gameDetails");
		rootStoreMock.gameModel.setGameVersionUrl("some url");

		const { container } = render(
			<SnackbarProvider>
				<GameDetails />
			</SnackbarProvider>
		);

		expect(container).toHaveTextContent("Pokedex");
	});
	test("render <GameDetails /> and redirect due useEffect", () => {
		rootStoreMock.routerStore.push("/gameDetails");

		const {} = render(
			<SnackbarProvider>
				<GameDetails />
			</SnackbarProvider>
		);

		expect(rootStoreMock.routerStore.location.pathname).not.toMatch(
			"/gameDetails"
		);
	});

	test("render <GameDetails /> and check Charmander", async () => {
		rootStoreMock.routerStore.push("/gameDetails");
		rootStoreMock.gameModel.setGameVersionUrl("some url");
		rootStoreMock.gameModel.getGameDetails(
			"",
			() => console.log(),
			(a, b) => console.log(a, b)
		);

		const { container } = render(
			<SnackbarProvider>
				<GameDetails />
			</SnackbarProvider>
		);
		expect(container).toHaveTextContent("Charmander");
	});
});
