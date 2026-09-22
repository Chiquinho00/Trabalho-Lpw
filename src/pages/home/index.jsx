import React from 'react'
import { Navbar } from '../../components/Navbar'
import { Anuncios } from '../../components/anuncios'
import { Busca } from '../../components/busca'
import './home.css'

// funcionamento simulado!!
export class Home extends React.Component {
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
            <Anuncios moradias={moradias} anuncios={anuncios} />

            <Busca onSuccess={this.handleConvert} />
          </div>
        </main>
      </div>
    )
  }
}

export default Home
