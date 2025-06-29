const { useState } = React;

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [mensaje, setMensaje] = useState(null);

  const calcularIMC = e => {
    e.preventDefault();
    const p = parseFloat(peso);
    const h = parseFloat(altura);
    if (isNaN(p) || isNaN(h) || h <= 0) {
      setMensaje({ texto: "Peso o altura inválidos", color: "#ccc" });
      return;
    }
    const imc = p / (h * h);
    const nivel = imc < 18.5
      ? "Bajo peso"
      : imc < 25
      ? "Normal"
      : imc < 30
      ? "Sobrepeso"
      : "Obesidad";
    const color = imc < 18.5
      ? "yellow"
      : imc < 25
      ? "green"
      : imc < 30
      ? "orange"
      : "red";
    setMensaje({ texto: `IMC: ${imc.toFixed(2)} – ${nivel}`, color });
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC}>
        <label>
          Peso (kg):
          <input
            type="number"
            step="0.1"
            value={peso}
            onChange={e => setPeso(e.target.value)}
          />
        </label>
        <label>
          Altura (m):
          <input
            type="number"
            step="0.01"
            value={altura}
            onChange={e => setAltura(e.target.value)}
          />
        </label>
        <button type="submit">Calcular</button>
      </form>
      {mensaje && (
        <div style={{ backgroundColor: mensaje.color, padding: "0.5rem" }}>
          {mensaje.texto}
        </div>
      )}
    </div>
  );
}
