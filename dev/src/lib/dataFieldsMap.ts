import { DataEng, DataFin, DataSwe } from './types'

export interface LangKeys {
  fin: keyof DataFin
  swe: keyof DataSwe
}

export const dataFieldsMap: Record<keyof DataEng, LangKeys> = {
  postDate: {
    fin: 'Kirjauspäivä',
    swe: 'Bokningsdag',
  },
  paymentDate: {
    fin: 'Maksupäivä',
    swe: 'Betalningsdag',
  },
  amount: {
    fin: 'Summa',
    swe: 'Belopp',
  },
  paymentType: {
    fin: 'Tapahtumalaji',
    swe: 'Betalningstyp',
  },
  payer: {
    fin: 'Maksaja',
    swe: 'Betalare',
  },
  recipientName: {
    fin: 'Saajan nimi',
    swe: 'Mottagarens namn',
  },
  recipientBIC: {
    fin: 'Saajan tilinumero',
    swe: 'Mottagarens BIC-kod',
  },
  recipientAccountNumber: {
    fin: 'Saajan BIC-tunnus',
    swe: 'Mottagarens kontonummer',
  },
  refferenceNumber: {
    fin: 'Viitenumero',
    swe: 'Referensnummer',
  },
  message: {
    fin: 'Viesti',
    swe: 'Meddelande',
  },
  archiveId: {
    fin: 'Arkistointitunnus',
    swe: 'Arkiveringskod',
  },
}
