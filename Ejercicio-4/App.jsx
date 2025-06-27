const { useState } = React;

function App() {
  // true = boton izquierdo habilitado; false = boton derecho habilitado
  const [izquierdaActiva, setIzquierdaActiva] = useState(true);

  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '2rem' }}>
      <button
        onClick={() => setIzquierdaActiva(false)}
        disabled={!izquierdaActiva}
      >
        Izquierdo
      </button>
      <button
        onClick={() => setIzquierdaActiva(true)}
        disabled={izquierdaActiva}
      >
        Derecho
      </button>
    </div>
  );
}

// Montamos App en el root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
