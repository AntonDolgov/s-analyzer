export const convertStringToNumber = (inputString: string | number) => {
  if (typeof inputString === 'number') return inputString

  const numberString = inputString.replace(',', '.')

  return parseFloat(numberString)
}
