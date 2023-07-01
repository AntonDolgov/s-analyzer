import { groupBy } from '@lib/groupBy'
import { convertStringToNumber } from './convertStringToNumber'
import { roundNumber } from './roundNumber'
import { getMonthString, parseDate } from './parseDate'

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

  const groupedDataByMonth = groupBy(
    data.filter(({ Summa }) => Summa !== null && Summa !== undefined),
    (item) => getMonthString(parseDate(item['Maksupäivä']).getMonth() + 1),
  )

  return Object.entries(groupedDataByMonth).reduce((acc, [month, data]) => {
    const groupedData = groupBy(data, 'Saajan nimi')
    const tableInfo = Object.entries(groupedData).reduce<
      Record<string, number>
    >((acc, [key, valuesList]) => {
      const totalSumOfCategory = valuesList.reduce((sum, current) => {
        const summaValue = current.Summa

        if (!summaValue) return sum

        return sum + convertStringToNumber(summaValue)
      }, 0)

      if (totalSumOfCategory === 0) return acc

      return {
        ...acc,
        [key]: roundNumber(totalSumOfCategory),
      }
    }, {})

    const total = roundNumber(
      Object.values(tableInfo).reduce((acc, current) => {
        if (current > 0) {
          return acc
        }

        return acc + current
      }),
    )

    return {
      ...acc,
      [month]: { tableInfo, total },
    } as const
  }, {})
}
