import { useState } from 'preact/hooks'
import { ChangeEvent } from 'preact/compat'

type JsonData = Record<string, any>[]

export const useFileInput = () => {
  const [jsonData, setJsonData] = useState<JsonData | null>(null)

  const handleFileInputChange = async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target?.files[0]
    const reader = new FileReader()

    reader.onload = function (e) {
      const text = e.target?.result

      if (typeof text === 'string') {
        const [keysString, ...valuesString] = text.split('\n')
        const keys = keysString.split(';')

        const json = valuesString.reduce<JsonData>((acc, current) => {
          const currentValues = current.split(';')
          const obj = keys.reduce(
            (objAcc, key, index) => ({
              ...objAcc,
              [key]: currentValues[index],
            }),
            {},
          )

          return [...acc, obj]
        }, [])

        setJsonData(json)
      }
    }
    reader.readAsText(file)
  }

  return { jsonData, handleFileInputChange } as const

  // return (
  //   <div>
  //     <input type="file" accept=".csv" onChange={handleFileInputChange} />
  //     {jsonData && (
  //       <pre>
  //         <code>{jsonData}</code>
  //       </pre>
  //     )}
  //   </div>
  // )
}
