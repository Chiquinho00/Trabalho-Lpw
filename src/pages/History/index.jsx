import { Navbar } from '../../components/Navbar';
import { Summary } from '../../components/Summary';
import { HistoryTable } from '../../components/HistoryTable';
import './History.css';

const dadosDeTroca = [
  { id: 1, data: '16/06/2026', moradia: 'Quarto mobiliado', localizacao: 'Centro, Campinas', status: 'Ativo' },
  { id: 2, data: '10/06/2026', moradia: 'República compartilhada', localizacao: 'Vila Mariana, São Paulo', status: 'Ativo' },
  { id: 3, data: '02/06/2026', moradia: 'Kitnet próxima ao campus', localizacao: 'Barão Geraldo, Campinas', status: 'Pausado' },
]

export function History() {
  return (
    <div className="page-layout">
      <Navbar />

      <main className="page-content">
        <h2>Meus anúncios</h2>

        <Summary />

        <HistoryTable data={dadosDeTroca} />
      </main>
    </div>
  );
}