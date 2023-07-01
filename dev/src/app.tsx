import './app.css'
import { parseTable } from '@lib/parser'

import { Table } from '@components/Table'
import { useFileInput } from '@lib/useFileInput'

export function App() {
  const { jsonData, handleFileInputChange } = useFileInput()
  const tableValuesByMonth = parseTable(jsonData as any)

  return (
    <div className="table-info">
      {!jsonData || !tableValuesByMonth ? (
        <input type="file" accept=".csv" onChange={handleFileInputChange} />
      ) : (
        <Table data={tableValuesByMonth} />
      )}
    </div>
  )
}
