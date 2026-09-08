import './HistoryTable.css'

export function HistoryTable({ data }) {
  return (
    <div className="table-responsive">
      <table className="history-table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Moradia</th>
            <th>Localização</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.data}</td>
              <td className="energy-text">{item.moradia}</td>
              <td className="token-text">{item.localizacao}</td>
              <td>
                <span className="status-badge">{item.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}