import { LangKeys, dataFieldsMap } from './dataFieldsMap'
import { Data, DataEng } from './types'

export const checkLang = (data: Data | Data[]): keyof LangKeys | undefined => {
  const item = Array.isArray(data) ? data[0] : data

  if (!item) return

  if ('Summa' in item) {
    return 'fin'
  }

  if ('Belopp' in item) {
    return 'swe'
  }
}

export const getFieldByLang = (data: Data | Data[], name: keyof DataEng) => {
  const lang = checkLang(data)

  return lang ? dataFieldsMap[name][lang] : undefined
}
