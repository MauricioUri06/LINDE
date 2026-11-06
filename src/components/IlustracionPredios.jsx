// Ilustración de una vista aérea de parcelas con un predio delimitado.
// Se puede reemplazar por una fotografía en src/assets cuando se tenga una.
export default function IlustracionPredios({ className = 'intro-imagen', marco = true }) {
  const parcelas = [
    { d: 'M0 0 H150 L130 110 H0 Z', c: '#7FB069' },
    { d: 'M150 0 H300 L290 90 L130 110 Z', c: '#A7C957' },
    { d: 'M300 0 H420 V80 L290 90 Z', c: '#5E9C48' },
    { d: 'M0 110 H130 L120 210 H0 Z', c: '#A7C957' },
    { d: 'M130 110 L290 90 L300 200 L120 210 Z', c: '#6A994E' },
    { d: 'M290 90 L420 80 V190 L300 200 Z', c: '#C5D86D' },
    { d: 'M0 210 H120 L110 300 H0 Z', c: '#5E9C48' },
    { d: 'M120 210 L300 200 L310 300 H110 Z', c: '#8DB580' },
    { d: 'M300 200 L420 190 V300 H310 Z', c: '#7FB069' },
  ]

  return (
    <svg viewBox="0 0 420 300" className={className} role="img" preserveAspectRatio="xMidYMid slice"
      aria-label="Vista aérea de parcelas agrícolas con un predio delimitado">
      <defs>
        <clipPath id="marco-predios">
          <rect width="420" height="300" rx="4" />
        </clipPath>
      </defs>
      <g clipPath="url(#marco-predios)">
      {parcelas.map((p, i) => (
        <path key={i} d={p.d} fill={p.c} stroke="#EEF5E9" strokeWidth="3" />
      ))}

      {/* Surcos de cultivo */}
      {[20, 40, 60, 80].map((y) => (
        <line key={y} x1="10" y1={y} x2="125" y2={y + 4} stroke="#6A9A55" strokeWidth="2" opacity="0.6" />
      ))}
      {[230, 250, 270, 290].map((y) => (
        <line key={y} x1="320" y1={y} x2="415" y2={y - 2} stroke="#5E8E4A" strokeWidth="2" opacity="0.5" />
      ))}

      {/* Bosque */}
      {[[340, 20], [365, 35], [390, 18], [355, 55], [395, 50]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="14" fill="#2F6B3A" />
      ))}

      {/* Río: entra por el borde izquierdo y sale por el derecho */}
      <path d="M-20 262 C60 238 120 290 200 270 S330 240 440 262"
        fill="none" stroke="#2F8FB0" strokeWidth="12" />
      </g>

      {/* Predio delimitado */}
      <polygon points="145,125 280,108 292,190 160,200"
        fill="#FFFFFF" fillOpacity="0.18" stroke="#FFFFFF" strokeWidth="4" strokeLinejoin="round" />
      {[[145, 125], [280, 108], [292, 190], [160, 200]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" fill="#15524A" stroke="#FFFFFF" strokeWidth="2.5" />
      ))}

      {/* Marcador dentro del predio */}
      <g transform="translate(219 176)">
        <path d="M0 0 C-15 -16 -15 -38 0 -42 C15 -38 15 -16 0 0 Z" fill="#15524A" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="0" cy="-27" r="6.5" fill="#FFFFFF" />
      </g>

      {marco && <rect width="420" height="300" rx="4" fill="none" stroke="#CFE3DF" strokeWidth="2" />}
    </svg>
  )
}
