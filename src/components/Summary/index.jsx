import './Summary.css'

export function Summary() {
  return (
    <div className="summary-container">
      <div className="summary-card">
        <h3>Anúncios publicados</h3>
        <p className="summary-value">12 anúncios</p>
      </div>
      
      <div className="summary-card highlight">
        <h3>Conversas iniciadas</h3>
        <p className="summary-value">8 contatos</p>
      </div>
    </div>
  )
}