async function obtenerUsuarios() {
    try {
        // Realizar la solicitud al servidor
        const respuesta = await fetch('http://localhost:3000/api/usuarios');
        const usuarios = await respuesta.json();

        // Seleccionar el contenedor donde se agregarán los usuarios
        const listaUsuarios = document.getElementById('lista-usuarios');

        // Recorrer la lista de usuarios
        usuarios.forEach(usuario => {

            const li = document.createElement('li');

            const texto = document.createTextNode(`${usuario.nombre}, ${usuario.edad} años, vive en ${usuario.ciudad}`);


            li.appendChild(texto);

            listaUsuarios.appendChild(li);
        });
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
    }
}

// Llamar a la función para obtener y mostrar los usuarios
obtenerUsuarios();
