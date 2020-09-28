export const gameTitleFormat = (gameTitle: string): string => {
  return gameTitle.length > 2
    ? gameTitle.charAt(0).toUpperCase() + gameTitle.slice(1)
    : gameTitle.toUpperCase();
};
