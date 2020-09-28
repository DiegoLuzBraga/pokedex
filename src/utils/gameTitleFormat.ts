export const gameTitleFormat = (gameTitle: string): string => {
  return gameTitle.length > 2
    ? gameTitle.replace("-", " ").replace("-", " ")
    : gameTitle.toUpperCase();
};
