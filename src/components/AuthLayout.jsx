import { useState } from 'react'
import IlustracionPredios from './IlustracionPredios.jsx'

// Pantalla dividida para login y registro: formulario a la izquierda, imagen a la derecha.
// Para usar una foto, guárdala como public/login.jpg. Si no existe, se muestra la ilustración.
export default function AuthLayout({ children }) {
  const [sinFoto, setSinFoto] = useState(false)

  return (
    <div className="auth">
      <div className="auth-formulario">{children}</div>

      <div className="auth-imagen">
        {sinFoto ? (
          <IlustracionPredios className="auth-ilustracion" marco={false} />
        ) : (
          <img src="/login.jpg" alt="Parcelas agrícolas" onError={() => setSinFoto(true)} />
        )}
        <div className="auth-imagen-texto">
          <h2>Sistema de gestión de polígonos</h2>
          <p>Valida tus parcelas al declararlas y prepara tu expediente.</p>
        </div>
      </div>
    </div>
  )
}
