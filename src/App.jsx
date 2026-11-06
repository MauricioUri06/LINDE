import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Registro from './pages/Registro.jsx'
import Principal from './pages/Principal.jsx'
import Modulo from './pages/Modulo.jsx'
import Layout from './components/Layout.jsx'
import RutaProtegida from './components/RutaProtegida.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />

      <Route
        path="/app"
        element={
          <RutaProtegida>
            <Layout />
          </RutaProtegida>
        }
      >
        <Route index element={<Principal />} />
        <Route path=":ruta" element={<Modulo />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
