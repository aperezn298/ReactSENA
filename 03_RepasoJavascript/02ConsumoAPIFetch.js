// Ejercicios de Repaso de Javascript //
// Autor: Alvaro Perez N
// Fecha: Octubre de 2024

// Consumo de API con Fetch
// URL de la API
const url = 'https://jsonplaceholder.typicode.com/posts';

// Ejjemplo JSON
[{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"

}]

// 01. Metodo Fetch.GET
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

// 02. Metodo Fetch.POST
fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Mi titulo",
        body: "Mi cuerpo",
        userId: 1
    })
}).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

// 03. Metodo Fetch.PUT
fetch(url + "/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Mi titulo",
        body: "Mi cuerpo",
        userId: 1
    })
}).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

// 04. Metodo Fetch.DELETE
fetch(url + "/1", {
    method: "DELETE"
}).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));