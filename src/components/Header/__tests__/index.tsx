import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { Header } from "..";
import { rootStoreMock } from "../../../session/RootSession/__mocks__";

describe("<Header /> test case", () => {
  test("render with 'POKEMON' text", () => {
    const { container } = render(<Header title="POKEMON" />);

    expect(container).toHaveTextContent("POKEMON");
  });

  test("test onClick action", () => {
    const onClick = jest.fn();

    const { getByTestId } = render(<Header title="POKEMON" goBack={onClick} />);

    fireEvent.click(getByTestId("arrowLeft"));

    expect(onClick).toHaveBeenCalled();
  });

  test("test goBack action", () => {
    const { getByTestId } = render(
      <Header
        title="POKEMON"
        goBack={() => rootStoreMock.routerStore.push("/")}
      />
    );

    fireEvent.click(getByTestId("arrowLeft"));

    expect(rootStoreMock.routerStore.location.pathname).toMatch("/");
  });
});
