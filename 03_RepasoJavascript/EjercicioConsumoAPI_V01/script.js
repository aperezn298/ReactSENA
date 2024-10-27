// URL de la API
const apiURL = "https://jsonplaceholder.typicode.com/users";

// Función para obtener usuarios de la API
async function fetchUsers() {
    try {
        // Fetch a la API y obtención de los usuarios
        const response = await fetch(apiURL);
        // Parseo de la respuesta a JSON
        const users = await response.json();
        // Llamada a la función para mostrar los usuarios en la tabla
        displayUsers(users);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

// Función para mostrar los usuarios en la tabla
function displayUsers(users) {
    // Obtención del tbody de la tabla
    const userTableBody = document.getElementById("userTableBody");
    // Limpiar el contenido del tbody
    userTableBody.innerHTML = "";
    // Iterar sobre los usuarios y agregar una fila por cada usuario
    users.forEach(({ id, name, username, email, website }) => {
        const row = `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${username}</td>
                <td>${email}</td>
                <td><a href="http://${website}" target="_blank">${website}</a></td>
            </tr>
        `;
        userTableBody.innerHTML += row;
    }); 
}

// Llamada a la función para obtener usuarios al cargar la página
fetchUsers();