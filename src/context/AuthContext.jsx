import { createContext, useContext, useState } from 'react'

// Almacenamiento temporal en memoria.
// La lista de usuarios vive mientras la página esté abierta;
// al recargar se pierde. Se reemplazará por la API y PostgreSQL.
const usuarios = []

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [usuarioActual, setUsuarioActual] = useState(null)

  function registrar(datos) {
    const correo = datos.correo.trim().toLowerCase()
    const ci = datos.ci.trim()

    if (usuarios.some((u) => u.correo === correo)) {
      return { ok: false, campo: 'correo', mensaje: 'Ya existe una cuenta con ese correo.' }
    }
    if (usuarios.some((u) => u.ci === ci)) {
      return { ok: false, campo: 'ci', mensaje: 'Ya existe una cuenta con ese CI.' }
    }

    const nuevo = {
      id: usuarios.length + 1,
      nombre: datos.nombre.trim(),
      apellido: datos.apellido.trim(),
      ci,
      correo,
      contrasena: datos.contrasena,
      rol: 'Administrador',
      fechaRegistro: new Date(),
    }
    usuarios.push(nuevo)
    return { ok: true }
  }

  function iniciarSesion(correo, contrasena) {
    const usuario = usuarios.find(
      (u) => u.correo === correo.trim().toLowerCase() && u.contrasena === contrasena,
    )
    if (!usuario) {
      return { ok: false, mensaje: 'Correo o contraseña incorrectos.' }
    }
    const { contrasena: _omitida, ...sinContrasena } = usuario
    setUsuarioActual(sinContrasena)
    return { ok: true }
  }

  function cerrarSesion() {
    setUsuarioActual(null)
  }

  return (
    <AuthContext.Provider value={{ usuarioActual, registrar, iniciarSesion, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
