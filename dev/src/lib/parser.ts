import { groupBy } from '@lib/groupBy'
import { convertStringToNumber } from './convertStringToNumber'
import { roundNumber } from './roundNumber'
import { getMonthString, parseDate } from './parseDate'
import { Data } from './types'
import { getFieldByLang } from './checkLang'

export const parseTable = (data: Data[] | null) => {
  if (!data) return {}

  const groupedDataByMonth = groupBy(
    data.filter((item) => {
      const amount = 'Summa' in item ? item.Summa : item.Belopp

      return amount !== null && amount !== undefined
    }),
    (item) => {
      const date =
        'Maksupäivä' in item ? item['Maksupäivä'] : item.Betalningsdag

      return getMonthString(parseDate(date).getMonth() + 1)
    },
  )

  return Object.entries(groupedDataByMonth).reduce((acc, [month, data]) => {
    const groupFieldName = getFieldByLang(data, 'recipientName')

    if (!groupFieldName) throw new Error('groupFieldName is not defined')

    const groupedData = groupBy(data, groupFieldName)
    const tableInfo = Object.entries(groupedData).reduce<
      Record<string, number>
    >((acc, [key, valuesList]) => {
      const totalSumOfCategory = valuesList.reduce((sum, current) => {
        const summaValue = 'Summa' in current ? current.Summa : current.Belopp

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
