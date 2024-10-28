// API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Elementos del DOM
const postList = document.getElementById('postList');
const postForm = document.getElementById('postForm');
const tituloInput = document.getElementById('postTitle');
const descripcionInput = document.getElementById('postBody');
const submitButton = document.getElementById('submit-create-post');

// Variable para almacenar el ID del post que se está actualizando
let currentPostId = null;

// Obtener la lista de posts
function getPosts() {
    // Solicitud GET a la API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let postHTML = '';
            data.slice(0, 10).forEach(({ id, title, body}) => {
                postHTML += `
                    <tr>
                        <td>${id}</td>
                        <td>${title}</td>
                        <td>${body}</td>
                        <td>
                            <button class="btn btn-primary btn-sm" onclick="updatePost(${id})"><i class="fas fa-edit"></i></button>
                            <button class="btn btn-danger btn-sm" onclick="deletePost(${id})"><i class="fas fa-trash"></i></button>
                        </td>
                    </tr>
                `;
            });
            postList.innerHTML = postHTML;
        });
}

// Crear o actualizar el post
postForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener los valores de los campos del formulario
    const post = {
        title: tituloInput.value,
        body: descripcionInput.value,
        userId: 1
    };

    // Determinar si se está creando o actualizando un post
    const method = currentPostId ? 'PUT' : 'POST';
    const url = currentPostId ? `${apiUrl}/${currentPostId}` : apiUrl;

    fetch(url, {
        method: method,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(post)
    })
    .then(response => response.json())
    .then(data => {
        Swal.fire({
            title: "Felicitaciones!",
            text: `Post con id:${data.id} ${currentPostId ? 'actualizado' : 'creado'} con éxito`,
            icon: "success"
        });
    })
    .catch(error => 
        Swal.fire({
            title: "Error!",
            text: `Error: ${error.message}`,
            icon: "error"
        })
    )
    .finally(() => {
        // Limpiar los campos del formulario
        tituloInput.value = '';
        descripcionInput.value = '';
        submitButton.id = "submit-create-post";
        submitButton.innerText = "Crear Post";
        submitButton.disabled = false;
        currentPostId = null; // Resetear el ID del post actual
        // Recargar la lista de posts
        getPosts();
    });
});

// Eliminar post
function deletePost(id) {
    Swal.fire({
        title: "¿Estás seguro de eliminar el Post?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminarlo!",
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`${apiUrl}/${id}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (response.status === 200) {
                    Swal.fire({
                        title: "Felicitaciones!",
                        text: `Post No.: ${id} eliminado con éxito`,
                        icon: "success"
                    });
                }
            })
            .catch(error => 
                Swal.fire({
                    title: "Error!",
                    text: `Error: ${error.message}`,
                    icon: "error"
                })
            )
            .finally(() => {
                getPosts(); // Actualizar la lista de posts después de eliminar
            });
        }
    });
}

// Colocar los datos del post a actualizar en el formulario
function updatePost(id) {
    fetch(`${apiUrl}/${id}`)
        .then(response => response.json())
        .then(data => {
            // Guardar el ID del post a actualizar
            currentPostId = data.id;

            // Asignar los valores del post a los campos del formulario
            tituloInput.value = data.title;
            descripcionInput.value = data.body;
            submitButton.id = "submit-update-post";
            submitButton.innerText = "Actualizar Post";
            submitButton.disabled = false;
        });
}

// Cargar posts al inicio
window.onload = getPosts;



// // Crear el post
// postForm.addEventListener('submit', function(e) {
//     // Evitar que el formulario se envíe
//     e.preventDefault();
//     // Obtener los valores de los campos del formulario
//     const newPost = {
//         title: tituloInput.value,
//         body: descripcionInput.value,
//         userId: 1
//     };
//     fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//         body: JSON.stringify(newPost)
//     })
//     .then(response => response.json())
//     .then(data => {
//         Swal.fire({
//             title: "Felicitaciones!",
//             text: `Post con id:${data.id} creado con éxito`,
//             icon: "success"
//         });
//     })
//     .catch(error => 
//         Swal.fire({
//             title: "Error!",
//             text: `Error: ${error.message}`,
//             icon: "error"
//         })
//     )
//     .finally(() => {
//         // Limpiar los campos del formulario
//         tituloInput.value = '';
//         descripcionInput.value = '';
//         submitButton.disabled = true;
//         // Recargar la página
//         setTimeout(function() {
//             location.reload();
//         }, 1500);
//     });
// });