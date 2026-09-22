import './anuncios.css'

export function Anuncios({ moradias, anuncios }) {
  return (
    <section className="anuncios-card card">
      <h3>Seu painel</h3>
      <p className="muted">Moradias compatíveis</p>
      <p className="value">{moradias}</p>
      <p className="muted">Anúncios salvos</p>
      <p className="value">{anuncios}</p>
    </section>
  )
}

export default Anuncios
