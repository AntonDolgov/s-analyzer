export function parseDate(dateString: string) {
  const [day, month, year] = dateString.split('.')

  return new Date(Number(year), Number(month) - 1, Number(day))
}

export function getMonthString(monthNumber: number) {
  if (monthNumber < 1 || monthNumber > 12) {
    throw new Error(
      'Invalid month number. Month number should be between 1 and 12.',
    )
  }

  const date = new Date(Date.UTC(2000, monthNumber - 1, 1))

  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
    date,
  )

  return monthName
}
