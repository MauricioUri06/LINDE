# LINDE

Frontend del Sistema de gestión de polígonos (React + Vite).

## Cómo ejecutarlo

Requisito: Node.js 20 o superior.

```
npm install
npm run dev
```

Luego abre http://localhost:5173 en el navegador.

## Qué incluye por ahora

- **Iniciar sesión** (`/login`) y **Registrar administrador** (`/registro`), en pantalla dividida: formulario a la izquierda e imagen a la derecha.
- **Ventana principal** (`/app`), protegida: solo se entra con sesión iniciada.
  - Bienvenida con el nombre y el rol del usuario.
  - Descripción de en qué consiste LINDE, con una ilustración de parcelas.
  - Historial de predios (vacío por ahora) y botón **Empezar**, que todavía no tiene acción. Cuando el historial tenga predios, el botón dirá "Nuevo predio".
- **Menú lateral** con los casos de uso CU-02 a CU-12. Cada opción abre una pantalla "en construcción". CU-01 (Iniciar sesión) lo cubre la pantalla de login.

## Almacenamiento temporal

Los usuarios registrados se guardan en una lista en memoria (`src/context/AuthContext.jsx`).
Al recargar la página la lista se vacía y hay que registrarse de nuevo.
Esta parte se reemplazará por la API de ASP.NET Core y PostgreSQL.

## Imagen del login

La foto de la derecha se lee de `public/login.jpg` (foto de Unsplash).
Para cambiarla, reemplaza ese archivo por otro con el mismo nombre.
Si el archivo no existe, se muestra la ilustración de `IlustracionPredios.jsx`.

## Estructura

```
public/
  login.jpg                        foto del login y el registro
src/
  assets/logo.png                  logo de LINDE
  components/
    AuthLayout.jsx                 pantalla dividida del login y el registro
    IlustracionPredios.jsx         ilustración de parcelas en SVG
    Layout.jsx                     menú lateral y barra superior
    RutaProtegida.jsx              bloquea /app sin sesión
  context/AuthContext.jsx          registro, login y sesión
  data/casosUso.js                 casos de uso del menú
  pages/
    Login.jsx
    Registro.jsx
    Principal.jsx                  ventana de inicio
    Modulo.jsx                     pantalla genérica de cada módulo
  styles/theme.css                 paleta Satelital y estilos
```
