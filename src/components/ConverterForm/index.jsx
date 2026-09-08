import { useState } from 'react'
import './ConverterForm.css'

export function ConverterForm({ onSuccess }) {
  const [amount, setAmount] = useState('')
  const [message, setMessage] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const value = amount.trim()
    if (!value) return setMessage({ type: 'error', text: 'Digite uma cidade ou instituição.' })
    const matches = 12
    setMessage({ type: 'success', text: `${matches} moradias encontradas para sua busca.` })
    setAmount('')
    if (onSuccess) onSuccess(value)
  }

  return (
    <section className="converter-card card">
      <h3>Encontre sua moradia</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-location">Onde você vai estudar?</label>
        <input
          id="search-location"
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Cidade, bairro ou instituição"
        />
        <small className="muted">Busque perto do campus, com segurança e praticidade.</small>
        <button type="submit">Buscar moradias</button>
      </form>
      {message && <p className={message.type === 'error' ? 'muted' : ''}>{message.text}</p>}
    </section>
  )
}

export default ConverterForm
