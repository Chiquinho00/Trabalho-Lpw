import React from 'react'
import { Navbar } from '../../components/Navbar'
import './About.css'

export class About extends React.Component {
  render() {
    return (
      <div className="page-layout institutional-page">
        <Navbar />
        <main className="page-content container">
          <section className="institutional-hero">
            <p className="eyebrow">Sobre o RoomHub</p>
            <h1>Moradia estudantil mais simples e segura.</h1>
            <p>
              O RoomHub é uma plataforma que conecta estudantes e anunciantes em um ambiente
              digital prático para encontrar ou divulgar moradias próximas a instituições de ensino.
            </p>
          </section>

          <section className="about-grid" aria-label="Sobre o RoomHub">
            <article className="card about-card">
              <span className="about-number">01</span>
              <h2>Nosso propósito</h2>
              <p>Ajudar estudantes a encontrar opções de moradia que combinem com sua rotina, localização e orçamento.</p>
            </article>
            <article className="card about-card">
              <span className="about-number">02</span>
              <h2>Como funciona</h2>
              <p>Reunimos busca, comunicação, avaliações e gerenciamento de anúncios em uma experiência organizada.</p>
            </article>
            <article className="card about-card">
              <span className="about-number">03</span>
              <h2>Nosso futuro</h2>
              <p>Construir uma comunidade acadêmica mais segura, transparente e conectada para viver perto do campus.</p>
            </article>
          </section>
        </main>
      </div>
    )
  }
}
