const boton_filtrar = document.getElementById('filtrarPLB');
const getPalabra = document.getElementById('palabra')
let palabras_filtrar = ["Manzana", "Banana", "pera", "durazno", "serie", "pero", "mango", "clase", "gonzalo", "comisionA", "reto", "html", "css", "javascript", "peso", "sobrepeso", "renderizado"];
const mensajeErrorElemento = document.getElementById('mensaje_error');

boton_filtrar.addEventListener('click', () => {
    const textoIngresado = getPalabra.value.trim(); // Usa .trim() para ignorar solo espacios en blanco

    // Limpia cualquier mensaje de error previo 
    mensajeErrorElemento.textContent = '';

    if (!textoIngresado) { 
        mensajeErrorElemento.textContent = "El campo no puede estar vacío.";
     
        listaPalabrasElemento.innerHTML = '';
        return; 
    }



    const palabrasFiltradas = palabras_filtrar.filter(palabra => {
        return palabra.toLowerCase().includes(textoIngresado.toLowerCase());
    });

    const listaPalabrasElemento = document.getElementById('lista_palabras'); 
    if (palabrasFiltradas.length > 0) {
        listaPalabrasElemento.innerHTML = palabrasFiltradas.map(palabra => `<li>${palabra}</li>`).join('');
    } else {
        listaPalabrasElemento.innerHTML = '<li>No se encontraron palabras.</li>';
    }
});