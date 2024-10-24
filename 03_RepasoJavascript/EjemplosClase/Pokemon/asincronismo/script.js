async function encontrarPokemon(nombre) {
    try {
        // Realizar una petición a un servidor con Fetch y Promesas
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        if (!response.ok) { // Si la petición falla
            // Lanzar un error
            throw new Error('Pokémon no encontrado');
        }
        // Convertir la respuesta a formato JSON
        const pokemonData = await response.json();
        // Mapear las habilidades del Pokémon y unirlas en un string
        const abilitiesPokemon = pokemonData.abilities.map(
            (ability) => ability.ability.name).join(', ');
        // Imprimir las habilidades del Pokémon
        document.getElementById('pokemon').innerHTML = 
        `Las habilidades de <strong>${nombre}</strong> son: (${abilitiesPokemon})`;
    } catch (error) { // Capturar errores
        // Imprimir el error en consola
        document.getElementById('pokemon').innerHTML = `${error.message}`
    }
}

document.getElementById('buscar').addEventListener('click', (e) => {
    e.preventDefault();
    const nombrePokemon = document.getElementById('nombrePokemon').value;
    encontrarPokemon(nombrePokemon);
});