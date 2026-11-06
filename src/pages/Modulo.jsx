import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { casosUso } from '../data/casosUso.js'

// Pantalla genérica para los módulos que todavía no se implementan.
export default function Modulo() {
  const { ruta } = useParams()
  const cu = casosUso.find((c) => c.ruta === ruta)
  if (!cu) return <Navigate to="/app" replace />

  const Icono = cu.icono

  return (
    <>
      <Link to="/app" className="volver">
        <ArrowLeft size={16} />
        Volver al inicio
      </Link>

      <div className="pagina-encabezado">
        <h1>{cu.nombre}</h1>
        <p>{cu.descripcion}</p>
      </div>

      <div className="vacio">
        <div className="tarjeta-icono grande">
          <Icono size={32} />
        </div>
        <h2>Módulo en construcción</h2>
        <p>Esta pantalla se implementará en los próximos sprints.</p>
      </div>
    </>
  )
}
