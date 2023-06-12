export function roundNumber(num: number, decimalPlaces = 2) {
  const multiplier = Math.pow(10, decimalPlaces)
  const rounded = Math.round(num * multiplier) / multiplier

  return Number(rounded.toFixed(decimalPlaces))
}
