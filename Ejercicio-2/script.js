const listaPalabrasElemento = document.getElementById('lista_palabras');
const mensajeErrorElemento  = document.getElementById('mensaje_error');
const boton_filtrar         = document.getElementById('filtrarPLB');
const getPalabra            = document.getElementById('palabra');

const palabras_filtrar = [
  "Manzana", "Banana", "pera", "durazno", "serie",
  "pero", "mango", "clase", "gonzalo", "comisionA",
  "reto", "html", "css", "javascript", "peso",
  "sobrepeso", "renderizado"
];

boton_filtrar.addEventListener('click', () => {
  const textoIngresado = getPalabra.value.trim();

  listaPalabrasElemento.innerHTML = '';
  mensajeErrorElemento.textContent  = '';

  if (!textoIngresado) {
    mensajeErrorElemento.textContent = 'El campo no puede estar vacío.';
    return;
  }

  const palabrasFiltradas = palabras_filtrar.filter(palabra =>
    palabra.toLowerCase().includes(textoIngresado.toLowerCase())
  );

  if (palabrasFiltradas.length > 0) {
    listaPalabrasElemento.innerHTML = palabrasFiltradas
      .map(palabra => `<li>${palabra}</li>`)
      .join('');
  } else {
    listaPalabrasElemento.innerHTML = '<li>No se encontraron palabras.</li>';
  }
});
