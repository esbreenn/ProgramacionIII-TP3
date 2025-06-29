const { useState } = React;

function App() {
  const [estatura, setEstatura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState("");
  const [colorResultado, setColorResultado] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const estatura_num = Number(estatura);
    const peso_num = Number(peso);
    let imc = (peso_num / (estatura_num * estatura_num)).toFixed(1);

    let mensaje = `Su IMC es de ${imc} | `;
    let color = "";

    if (imc < 18.5) {
      mensaje += "Nivel bajo.";
      color = "goldenrod";
    } else if (imc <= 24.9) {
      mensaje += "Nivel Normal.";
      color = "green";
    } else if (imc <= 29.9) {
      mensaje += "Nivel de sobrepeso.";
      color = "orange";
    } else {
      mensaje += "Nivel de obesidad.";
      color = "red";
    }

    setResultado(mensaje);
    setColorResultado(color);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputN
          id="inputEstatura"
          text="Estatura (en metros)"
          value={estatura}
          onChange={e => setEstatura(e.target.value)}
        />
        <br />
        <InputN
          id="inputPeso"
          text="Peso (en kilogramos)"
          value={peso}
          onChange={e => setPeso(e.target.value)}
        />
        <br /><br />
        <button type="submit">Calcular</button>
      </form>
      <br />
      {resultado && <div style={{ color: colorResultado }}>{resultado}</div>}
    </>
  );
}
