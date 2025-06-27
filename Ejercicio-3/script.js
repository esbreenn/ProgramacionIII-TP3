const lista = document.getElementById("lista");
const APIurl = 'https://jsonplaceholder.typicode.com/todos'
fetch(APIurl)
    .then(res => res.json())
    .then(tareas => {
        const tareasCompletadas = tareas.filter(tarea => tarea.completed);

        tareasCompletadas.forEach(tarea => {
            const li = document.createElement("li");
            li.textContent = `${tarea.id}. ${tarea.title}`;
            lista.appendChild(li);
        });
    })
    .catch(error => {
        console.error(`Error al obtener los datos: ${error}`);
    });