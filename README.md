# LINDE

Frontend del Sistema de polígonos de certificación (React + Vite).

## Cómo ejecutarlo

Requisito: Node.js 20 o superior.

```
npm install
npm run dev
```

Luego abre http://localhost:5173 en el navegador.

## Qué incluye por ahora

- Iniciar sesión (`/login`)
- Registrar administrador (`/registro`)
- Ventana principal (`/app`) con los 12 casos de uso (CU-01 a CU-12). Cada módulo abre una pantalla en construcción.

## Almacenamiento temporal

Los usuarios registrados se guardan en una lista en memoria (`src/context/AuthContext.jsx`).
Al recargar la página la lista se vacía y hay que registrarse de nuevo.
Esta parte se reemplazará por la API de ASP.NET Core y PostgreSQL.

## Estructura

```
src/
  assets/logo.png
  components/Layout.jsx        menú lateral y barra superior
  components/RutaProtegida.jsx bloquea /app sin sesión
  context/AuthContext.jsx      registro, login y sesión
  data/casosUso.js             lista de casos de uso del menú
  pages/Login.jsx
  pages/Registro.jsx
  pages/Principal.jsx
  pages/Modulo.jsx             pantalla genérica de cada módulo
  styles/theme.css             paleta Satelital
```
