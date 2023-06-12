import './app.css'
import { parseTable } from '@lib/parser'

import { Table } from '@components/Table'
import { useFileInput } from '@lib/useFileInput'

export function App() {
  const { jsonData, handleFileInputChange } = useFileInput()
  const { tableValues, total } = parseTable(jsonData)

  return (
    <div className="table-info">
      {!jsonData || !tableValues ? (
        <input type="file" accept=".csv" onChange={handleFileInputChange} />
      ) : (
        <Table data={tableValues} total={total} />
      )}
    </div>
  )
}
