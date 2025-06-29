// App.jsx
const { useState } = React;

function realizarOperacion(num1, num2, operacion) {
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  if (isNaN(n1) || isNaN(n2)) {
    return "Ingresa números válidos";
  }
  switch (operacion) {
    case "suma":
      return n1 + n2;
    case "resta":
      return n1 - n2;
    case "multiplicacion":
      return n1 * n2;
    case "division":
      if (n2 === 0) return "No se puede dividir por cero.";
      return n1 / n2;
    default:
      return "Operación no válida.";
  }
}

function App() {
  const [numero1, setNumero1]     = useState("");
  const [numero2, setNumero2]     = useState("");
  const [operacion, setOperacion] = useState("suma");
  const [resultado, setResultado] = useState("");

  const divisionPorCero = operacion === "division" && parseFloat(numero2) === 0;

  const handleCalcular = (e) => {
    e.preventDefault();
    const res = realizarOperacion(numero1, numero2, operacion);
    setResultado(res);
  };

  return (
    <div>
      <h1>Calculadora React</h1>
      <form onSubmit={handleCalcular}>
        <div>
          <label>
            Número 1:
            <input
              type="number"
              value={numero1}
              onChange={e => setNumero1(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Número 2:
            <input
              type="number"
              value={numero2}
              onChange={e => setNumero2(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Operación:
            <select
              value={operacion}
              onChange={e => setOperacion(e.target.value)}
            >
              <option value="suma">Suma</option>
              <option value="resta">Resta</option>
              <option value="multiplicacion">Multiplicación</option>
              <option value="division">División</option>
            </select>
          </label>
        </div>
        <div>
          <button type="submit" disabled={divisionPorCero}>
            Calcular
          </button>
        </div>
      </form>
      <p>
        <strong>Resultado:</strong> {resultado}
      </p>
    </div>
  );
}
