import {
  Users,
  LandPlot,
  Hexagon,
  FileText,
  Send,
  ShieldCheck,
  Bell,
  ClipboardCheck,
  FolderOpen,
  Layers,
  SlidersHorizontal,
  KeyRound,
} from 'lucide-react'

// Casos de uso del diagrama general (versión corregida por el docente).
export const casosUso = [
  // CU-01 lo cubre la pantalla de login, por eso no aparece en el menú.
  { codigo: 'CU-01', nombre: 'Iniciar sesión', ruta: null, grupo: null, icono: KeyRound,
    descripcion: 'Acceso al sistema según el rol del usuario.' },
  { codigo: 'CU-02', nombre: 'Gestionar productores', ruta: 'productores', grupo: 'Registro', icono: Users,
    descripcion: 'Registrar, consultar, editar y eliminar productores.' },
  { codigo: 'CU-03', nombre: 'Gestionar predios', ruta: 'predios', grupo: 'Registro', icono: LandPlot,
    descripcion: 'Datos del predio y su superficie declarada.' },
  { codigo: 'CU-04', nombre: 'Gestionar polígonos', ruta: 'poligonos', grupo: 'Registro', icono: Hexagon,
    descripcion: 'Dibujar, importar GeoJSON o KML y ver versiones.' },
  { codigo: 'CU-05', nombre: 'Gestionar documentos', ruta: 'documentos', grupo: 'Registro', icono: FileText,
    descripcion: 'Título de propiedad y autorización de uso de suelo.' },
  { codigo: 'CU-06', nombre: 'Enviar predio a revisión', ruta: 'envio', grupo: 'Validación', icono: Send,
    descripcion: 'Envía el predio a las cuatro validaciones.' },
  { codigo: 'CU-07', nombre: 'Validar predio', ruta: 'validacion', grupo: 'Validación', icono: ShieldCheck,
    descripcion: 'Geometría, titularidad, uso de suelo y cobertura.' },
  { codigo: 'CU-08', nombre: 'Gestionar alertas', ruta: 'alertas', grupo: 'Validación', icono: Bell,
    descripcion: 'Alertas priorizadas generadas por las validaciones.' },
  { codigo: 'CU-09', nombre: 'Resolver casos en revisión', ruta: 'casos', grupo: 'Validación', icono: ClipboardCheck,
    descripcion: 'El verificador aprueba u observa los casos con alerta.' },
  { codigo: 'CU-10', nombre: 'Gestionar expedientes', ruta: 'expedientes', grupo: 'Expedientes', icono: FolderOpen,
    descripcion: 'Expediente digital del predio aprobado para el SENASAG.' },
  { codigo: 'CU-11', nombre: 'Gestionar capas de referencia', ruta: 'capas', grupo: 'Administración', icono: Layers,
    descripcion: 'Capas de INRA y ABT usadas en las validaciones.' },
  { codigo: 'CU-12', nombre: 'Gestionar parámetros', ruta: 'parametros', grupo: 'Administración', icono: SlidersHorizontal,
    descripcion: 'Fecha de corte, umbrales y exenciones de la Ley 741.' },
]

export const grupos = ['Registro', 'Validación', 'Expedientes', 'Administración']
