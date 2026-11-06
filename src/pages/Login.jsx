import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'
import logo from '../assets/logo.png'
import AuthLayout from '../components/AuthLayout.jsx'

export default function Login() {
  const { iniciarSesion } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [correo, setCorreo] = useState(location.state?.correo ?? '')
  const [contrasena, setContrasena] = useState('')
  const [verContrasena, setVerContrasena] = useState(false)
  const [error, setError] = useState('')
  const aviso = location.state?.registrado ? 'Cuenta creada. Ya puedes iniciar sesión.' : ''

  function enviar(e) {
    e.preventDefault()
    if (!correo.trim() || !contrasena) {
      setError('Ingresa tu correo y tu contraseña.')
      return
    }
    const resultado = iniciarSesion(correo, contrasena)
    if (!resultado.ok) {
      setError(resultado.mensaje)
      return
    }
    navigate('/app')
  }

  return (
    <AuthLayout>
      <form className="auth-card" onSubmit={enviar} noValidate>
        <img src={logo} alt="LINDE" className="auth-logo" />
        <h1>Iniciar sesión</h1>
        <p className="auth-sub">Sistema de gestión de polígonos</p>

        {aviso && !error && <div className="mensaje mensaje-exito">{aviso}</div>}
        {error && <div className="mensaje mensaje-error">{error}</div>}

        <label className="campo">
          <span>Correo electrónico</span>
          <div className="input-icono">
            <Mail size={18} />
            <input
              type="email"
              value={correo}
              onChange={(e) => { setCorreo(e.target.value); setError('') }}
              placeholder="admin@linde.bo"
              autoComplete="email"
            />
          </div>
        </label>

        <label className="campo">
          <span>Contraseña</span>
          <div className="input-icono">
            <Lock size={18} />
            <input
              type={verContrasena ? 'text' : 'password'}
              value={contrasena}
              onChange={(e) => { setContrasena(e.target.value); setError('') }}
              placeholder="Tu contraseña"
              autoComplete="current-password"
            />
            <button
              type="button"
              className="btn-ojo"
              onClick={() => setVerContrasena(!verContrasena)}
              aria-label={verContrasena ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              {verContrasena ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </label>

        <button type="submit" className="btn btn-primario btn-bloque">Ingresar</button>

        <p className="auth-pie">
          ¿No tienes cuenta? <Link to="/registro">Registrar administrador</Link>
        </p>
      </form>
    </AuthLayout>
  )
}
