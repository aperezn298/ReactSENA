function encontrarPokemon(nombrePokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Pokémon no encontrado');
        }
        return response.json();
    })
    .then((pokemonData) => {
        const abilitiesPokemon = pokemonData.abilities.map(
            (ability) => ability.ability.name).join(', ');
            document.getElementById('pokemon').innerHTML = 
            `Las habilidades de <strong>${nombrePokemon}</strong> son: (${abilitiesPokemon})`;
    })
    .catch(error => 
        document.getElementById('pokemon').innerHTML = `${error.message}`
    );
}

document.getElementById('buscar').addEventListener('click', (e) => {
    e.preventDefault();
    const nombrePokemon = document.getElementById('nombrePokemon').value;
    encontrarPokemon(nombrePokemon);
});
