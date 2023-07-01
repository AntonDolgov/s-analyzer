import { useState } from 'preact/hooks'

interface TableProps {
  data: Record<string, { tableInfo: Record<string, number>; total: number }>
}

export const Table = ({ data }: TableProps) => {
  const [sortKey, setSortKey] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState('asc')

  const getSortedEntries = (data: Record<string, number>) =>
    Object.entries(data).sort((a, b) => {
      const [keyA, valueA] = a
      const [keyB, valueB] = b

      if (sortKey === 'value') {
        return sortOrder === 'asc' ? valueA - valueB : valueB - valueA
      } else {
        // Sort by key (default)
        return sortOrder === 'asc'
          ? keyA.localeCompare(keyB)
          : keyB.localeCompare(keyA)
      }
    })

  // Update the sort key and order when a column header is clicked
  const handleColumnClick = (column: string) => {
    if (sortKey === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(column)
      setSortOrder('asc')
    }
  }

  return Object.entries(data).map(([month, { tableInfo, total }]) => (
    <div className="table-box">
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => handleColumnClick('key')}>
              Получатель ({month})
            </th>
            <th onClick={() => handleColumnClick('value')}>Сумма</th>
          </tr>
        </thead>
        <tbody>
          {getSortedEntries(tableInfo).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value} евро</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total:</td>
            <td>{total}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  ))
}
