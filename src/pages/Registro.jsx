import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import logo from '../assets/logo.png'
import AuthLayout from '../components/AuthLayout.jsx'

const vacio = { nombre: '', apellido: '', ci: '', correo: '', contrasena: '', confirmar: '' }

function validar(d) {
  const errores = {}
  if (!d.nombre.trim()) errores.nombre = 'Ingresa tu nombre.'
  if (!d.apellido.trim()) errores.apellido = 'Ingresa tu apellido.'
  if (!d.ci.trim()) errores.ci = 'Ingresa tu CI.'
  else if (!/^\d{5,10}$/.test(d.ci.trim())) errores.ci = 'El CI debe tener entre 5 y 10 dígitos.'
  if (!d.correo.trim()) errores.correo = 'Ingresa tu correo.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.correo.trim())) errores.correo = 'El correo no es válido.'
  if (d.contrasena.length < 8) errores.contrasena = 'La contraseña debe tener al menos 8 caracteres.'
  if (d.confirmar !== d.contrasena) errores.confirmar = 'Las contraseñas no coinciden.'
  return errores
}

export default function Registro() {
  const { registrar } = useAuth()
  const navigate = useNavigate()
  const [datos, setDatos] = useState(vacio)
  const [errores, setErrores] = useState({})

  function cambiar(e) {
    const { name, value } = e.target
    setDatos({ ...datos, [name]: value })
    if (errores[name]) setErrores({ ...errores, [name]: undefined })
  }

  function enviar(e) {
    e.preventDefault()
    const nuevos = validar(datos)
    if (Object.keys(nuevos).length > 0) {
      setErrores(nuevos)
      return
    }
    const resultado = registrar(datos)
    if (!resultado.ok) {
      setErrores({ [resultado.campo]: resultado.mensaje })
      return
    }
    navigate('/login', { state: { registrado: true, correo: datos.correo.trim() } })
  }

  function campo(name, etiqueta, props = {}) {
    return (
      <label className="campo">
        <span>{etiqueta}</span>
        <input
          name={name}
          value={datos[name]}
          onChange={cambiar}
          className={errores[name] ? 'invalido' : ''}
          {...props}
        />
        {errores[name] && <small className="error-campo">{errores[name]}</small>}
      </label>
    )
  }

  return (
    <AuthLayout>
      <form className="auth-card auth-card-ancha" onSubmit={enviar} noValidate>
        <img src={logo} alt="LINDE" className="auth-logo" />
        <h1>Registrar administrador</h1>
        <p className="auth-sub">Crea la cuenta con acceso a todos los módulos</p>

        <div className="fila">
          {campo('nombre', 'Nombre', { placeholder: 'Juan', autoComplete: 'given-name' })}
          {campo('apellido', 'Apellido', { placeholder: 'Pérez', autoComplete: 'family-name' })}
        </div>
        {campo('ci', 'Carnet de identidad', { placeholder: '7845123', inputMode: 'numeric' })}
        {campo('correo', 'Correo electrónico', { type: 'email', placeholder: 'admin@linde.bo', autoComplete: 'email' })}
        <div className="fila">
          {campo('contrasena', 'Contraseña', { type: 'password', placeholder: 'Mínimo 8 caracteres', autoComplete: 'new-password' })}
          {campo('confirmar', 'Confirmar contraseña', { type: 'password', placeholder: 'Repite la contraseña', autoComplete: 'new-password' })}
        </div>

        <button type="submit" className="btn btn-primario btn-bloque">Crear cuenta</button>

        <p className="auth-pie">
          ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
      </form>
    </AuthLayout>
  )
}
