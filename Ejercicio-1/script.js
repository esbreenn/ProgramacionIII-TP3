const A = document.getElementById('numero1');
const B = document.getElementById('numero2');
const seleccion = document.getElementById('operacion');
const boton_calcular = document.getElementById('calcularBtn');
const resultadoElemento = document.getElementById('resultado');

function realizarOperacion(num1,num2, operacion)
{
    let res;
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    if(isNaN(numero1) || isNaN(numero2)) 
    {
        return("Ingresa numeros validos");
    }
    switch(operacion)
    {
        case 'suma':
            res = numero1 + numero2;
            break;
        case 'resta':
            res = numero1 - numero2;
            break;
        case 'multiplicacion':
            res = numero1 * numero2;
            break;
        case 'division':
            
            if (numero2 === 0) { 
                return "No se puede dividir por cero.";

            }

            res = numero1 / numero2;
            break;
        default:
            return "Operación no válida.";
    }
    return res;
}
function actualizarEstadoBotonCalcular() {
    const operacionSeleccionada = seleccion.value;
    const numero2Valor = parseFloat(B.value); 

    if (operacionSeleccionada === 'division' && numero2Valor === 0) {

        boton_calcular.disabled = true;
    } else {
       
        boton_calcular.disabled = false;
    }
}
B.addEventListener('input', actualizarEstadoBotonCalcular);

document.addEventListener('DOMContentLoaded', actualizarEstadoBotonCalcular);

boton_calcular.addEventListener('click', () =>
{
    const valorA = A.value;
    const valorB = B.value;
    const operacionSeleccionada = seleccion.value;

    const resultadoFinal = realizarOperacion(valorA,valorB,operacionSeleccionada);
    resultadoElemento.innerHTML = resultadoFinal; //Mostramos en el html
})

seleccion.addEventListener('change', actualizarEstadoBotonCalcular);


