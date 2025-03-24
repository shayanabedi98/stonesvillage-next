export const stoneColors: string[] = [
  "red",
  "blue",
  "green",
  "yellow",
  "black",
  "gray",
  "white",
  "beige",
  "orange",
  "pink",
  "brown",
];

export function colorDecoder(color: string) {
  const index = stoneColors.indexOf(color.toLowerCase());
  return index !== -1 ? index + 1 : 0;
}
