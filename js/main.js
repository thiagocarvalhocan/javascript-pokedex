const pokemonList = document.getElementById("pokemonList");
const limit = 10;
let offset = 0;
const maximunRecords = 151; //Set up here the total of records allowed according to the generation of the Pokemons
const loadMoreButton = document.getElementById("loadMoreButton");

//HTML created using the Pokémon data one by one
function loadPokemonDetail(offset, limit) {
  pokemonApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map(
        (pokemon) => `
        <a href="details.html?id=${pokemon.id}" >
        <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.id}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">  
            <ol class="types">
                ${pokemon.types
                  .map((type) => `<li class="type ${type}">${type}</li>`)
                  .join("")}
            </ol>
            <img src="${pokemon.photo}"
                alt="${pokemon.name}">
        </div>
        </li>
        </a>
      `
      )
      .join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonDetail(offset, limit);

//Treatment of the Load More button

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordNexPage = offset + limit;

  if (qtdRecordNexPage >= maximunRecords) {
    const newLimit = maximunRecords - offset;
    loadPokemonDetail(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton); //remove button when the list is over
  } else {
    loadPokemonDetail(offset, limit);
  }
});
