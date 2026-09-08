import React from 'react'
import { Navbar } from '../../components/Navbar'
import './Contact.css'

export class Contact extends React.Component {
  state = { sent: false }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ sent: true })
  }

  render() {
    return (
      <div className="page-layout institutional-page">
        <Navbar />
        <main className="page-content container contact-layout">
          <section className="contact-copy">
            <p className="eyebrow">Contato</p>
            <h1>Vamos encontrar o espaço certo?</h1>
            <p>Envie sua dúvida, sugestão ou proposta de parceria. O RoomHub existe para tornar a busca por moradia estudantil mais tranquila.</p>
            <div className="contact-details">
              <span>oi@roomhub.com.br</span>
              <span>Segunda a sexta, 9h às 18h</span>
            </div>
          </section>

          <form className="card contact-form" onSubmit={this.handleSubmit}>
            <label htmlFor="name">Nome</label>
            <input id="name" name="name" type="text" placeholder="Seu nome" required />
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" placeholder="voce@email.com" required />
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" rows="5" placeholder="Como podemos ajudar?" required />
            <button type="submit">Enviar mensagem</button>
            {this.state.sent && <p className="form-success" role="status">Mensagem enviada. Em breve entraremos em contato!</p>}
          </form>
        </main>
      </div>
    )
  }
}
