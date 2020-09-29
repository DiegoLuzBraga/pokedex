export const formatRegions = (regions: string[]): string => {
  return regions.length >= 1 ? regions.join(", ") : regions[0];
};
