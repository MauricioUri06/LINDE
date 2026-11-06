import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { House, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'
import { casosUso, grupos } from '../data/casosUso.js'
import logo from '../assets/logo.png'

export default function Layout() {
  const { usuarioActual, cerrarSesion } = useAuth()
  const navigate = useNavigate()

  function salir() {
    cerrarSesion()
    navigate('/login')
  }

  const iniciales = `${usuarioActual.nombre[0] ?? ''}${usuarioActual.apellido[0] ?? ''}`.toUpperCase()

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src={logo} alt="LINDE" />
        </div>

        <nav className="menu">
          <NavLink to="/app" end className="menu-item">
            <House size={18} />
            <span>Inicio</span>
          </NavLink>

          {grupos.map((grupo) => (
            <div key={grupo} className="menu-grupo">
              <p className="menu-titulo">{grupo}</p>
              {casosUso
                .filter((cu) => cu.grupo === grupo)
                .map((cu) => {
                  const Icono = cu.icono
                  return (
                    <NavLink key={cu.codigo} to={`/app/${cu.ruta}`} className="menu-item">
                      <Icono size={18} />
                      <span>{cu.nombre}</span>
                    </NavLink>
                  )
                })}
            </div>
          ))}
        </nav>
      </aside>

      <div className="contenido">
        <header className="topbar">
          <span className="topbar-titulo">Sistema de gestión de polígonos</span>
          <div className="topbar-usuario">
            <div className="avatar">{iniciales}</div>
            <div className="usuario-datos">
              <span className="usuario-nombre">
                {usuarioActual.nombre} {usuarioActual.apellido}
              </span>
              <span className="usuario-rol">{usuarioActual.rol}</span>
            </div>
            <button className="btn btn-secundario" onClick={salir}>
              <LogOut size={16} />
              Cerrar sesión
            </button>
          </div>
        </header>

        <main className="pagina">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
