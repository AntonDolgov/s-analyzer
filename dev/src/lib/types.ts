export type Data = DataFin | DataSwe

export interface DataEng {
  postDate: string
  paymentDate: string
  amount: string | number | undefined
  paymentType: string
  payer: string
  recipientName: string
  recipientBIC: string
  recipientAccountNumber: string
  refferenceNumber: string
  message: string
  archiveId: string
}

export interface DataFin {
  Kirjauspäivä: DataEng['postDate']
  Maksupäivä: DataEng['paymentDate']
  Summa: DataEng['amount']
  Tapahtumalaji: DataEng['paymentType']
  Maksaja: DataEng['payer']
  'Saajan nimi': DataEng['recipientName']
  'Saajan tilinumero': DataEng['recipientBIC']
  'Saajan BIC-tunnus': DataEng['recipientAccountNumber']
  Viitenumero: DataEng['refferenceNumber']
  Viesti: DataEng['message']
  Arkistointitunnus: DataEng['archiveId']
}

export interface DataSwe {
  Bokningsdag: DataEng['postDate']
  Betalningsdag: DataEng['paymentDate']
  Belopp: DataEng['amount']
  Betalningstyp: DataEng['paymentType']
  Betalare: DataEng['payer']
  'Mottagarens namn': DataEng['recipientName']
  'Mottagarens BIC-kod': DataEng['recipientBIC']
  'Mottagarens kontonummer': DataEng['recipientAccountNumber']
  Referensnummer: DataEng['refferenceNumber']
  Meddelande: DataEng['message']
  Arkiveringskod: DataEng['archiveId']
}
