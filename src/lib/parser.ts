import { groupBy } from '@lib/groupBy'
import { convertStringToNumber } from './convertStringToNumber'
import { roundNumber } from './roundNumber'
import { parseDate } from './parseDate'

interface Data {
  Kirjauspäivä: string
  Maksupäivä: string
  Summa: string | number | undefined
  Tapahtumalaji: string
  Maksaja: string
  'Saajan nimi': string
  'Saajan tilinumero': string
  'Saajan BIC-tunnus': string
  Viitenumero: string
  Viesti: string
  Arkistointitunnus: string
}

export const parseTable = (data: Data[] | null) => {
  if (!data) return {}

  const groupedDataByMonth = groupBy(data, (item) =>
    parseDate(item['Maksupäivä']).getMonth(),
  )
  const groupedData = groupBy(data, 'Saajan nimi')

  console.log('print: ', groupedDataByMonth, groupedData)

  const tableValues = Object.entries(groupedData).reduce<
    Record<string, number>
  >((acc, [key, valuesList]) => {
    const totalSumOfCategory = valuesList.reduce((sum, current) => {
      const summaValue = current.Summa

      if (!summaValue) return sum

      const month = parseDate(current['Maksupäivä']).getMonth()

      if (month !== 5) return sum

      return sum + convertStringToNumber(summaValue)
    }, 0)

    if (totalSumOfCategory === 0) return acc

    return {
      ...acc,
      [key]: roundNumber(totalSumOfCategory),
    }
  }, {})
  const total = Object.values(tableValues).reduce((acc, current) => {
    if (current > 0) {
      return acc
    }

    return acc + current
  })

  return {
    tableValues,
    total: roundNumber(total),
  }
}
