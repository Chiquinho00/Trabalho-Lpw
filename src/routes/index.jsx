import { Routes, Route } from 'react-router-dom'
import { History } from '../pages/History'
import { EnergyConverter } from '../pages/EnergyConverter'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EnergyConverter />} /> 
      <Route path="/historico" element={<History />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  )
}