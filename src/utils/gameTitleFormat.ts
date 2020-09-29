export const gameTitleFormat = (gameTitle: string): string => {
  if (gameTitle.split("-").length >= 2) {
    return `${gameTitle.split("-")[0]} ${gameTitle
      .split("-")[1]
      .toUpperCase()}`;
  }
  return gameTitle;
};
