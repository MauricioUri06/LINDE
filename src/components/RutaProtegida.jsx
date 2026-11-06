import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function RutaProtegida({ children }) {
  const { usuarioActual } = useAuth()
  if (!usuarioActual) return <Navigate to="/login" replace />
  return children
}
