export function capitalizeFirstLetter(value: string | null) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : "-";
}
