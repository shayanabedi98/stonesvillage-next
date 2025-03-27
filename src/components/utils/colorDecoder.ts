export const stoneColors: string[] = [
  "Black",
  "Gray",
  "White",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Beige",
  "Orange",
  "Pink",
  "Brown",
];

export function colorDecoder(color: string) {
  const index = stoneColors.indexOf(color.toLowerCase());
  return index !== -1 ? index + 1 : 0;
}

export function indexToColor(index: number): string {
  const arrayIndex = index - 1;
  
  if (arrayIndex >= 0 && arrayIndex < stoneColors.length) {
    return stoneColors[arrayIndex];
  }
  
  return "unknown";
}
