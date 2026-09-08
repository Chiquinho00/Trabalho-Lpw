import React from 'react'
import { Navbar } from '../../components/Navbar'
import { BalanceCard } from '../../components/BalanceCard'
import { ConverterForm } from '../../components/ConverterForm'
import './EnergyConverter.css'

// funcionamento simulado!!
export class EnergyConverter extends React.Component {
  handleConvert = (generated) => {
    // placeholder: aqui você pode atualizar estado global ou exibir notificações
    console.log('Busca realizada:', generated)
  }

  render() {
    const moradias = 12
    const anuncios = 8

    return (
      <div className="page-layout">
        <Navbar />
        <main className="page-content container">
          <section className="home-intro">
            <div>
              <p className="eyebrow">Moradia estudantil sem complicação</p>
              <h1>Encontre um lugar para chamar de casa.</h1>
              <p className="intro-text">O RoomHub conecta estudantes e anunciantes em um só lugar para você encontrar moradias próximas à sua instituição.</p>
            </div>
            <div className="home-badge">12<span>opções perto de você</span></div>
          </section>

          <h2>Comece sua busca</h2>

          <div className="converter-grid">
            <BalanceCard moradias={moradias} anuncios={anuncios} />

            <ConverterForm onSuccess={this.handleConvert} />
          </div>
        </main>
      </div>
    )
  }
}

export default EnergyConverter
