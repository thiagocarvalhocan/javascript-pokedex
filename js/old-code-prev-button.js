/* const nextUrlWithId = "https://pokeapi.co/api/v2/pokemon/" + (pokemonId + 1);
const prevUrlWithId = "https://pokeapi.co/api/v2/pokemon/" + (pokemonId - 1); */


/* fetch(urlWithId)
  .then((response) => response.json())
  .then((convertedResponse) => {
    convertPokemonDetailsToLi(convertedResponse);
  })
  .catch((error) =>
    console.error(
      "Something went wrong getting Pokémon data from the API: ",
      error
    )
  ); */

/* //Condition to define the URL to fetch

loadPrevPokemon.addEventListener("click", () => {
  testePrev(prevUrlWithId);
});

function testePrev(urlnova) {
  fetch(urlnova)
    .then((response) => response.json())
    .then((convertedResponse) => {
      convertPokemonDetailsToLi(convertedResponse);
    })
    .catch((error) =>
      console.error(
        "Something went wrong getting Pokémon data from the API: ",
        error
      )
    );
} */
/* //Next Function
loadNextPokemon.addEventListener("click", () => {
  const loadNextPokemon = document.getElementById("nextButton");
   
  fetch(urlWithId)
    .then((response) => response.json())
    .then((convertedResponse) => {
      convertPokemonDetailsToLi(convertedResponse);
    })
    .catch((error) =>
      console.error(
        "Something went wrong getting Pokémon data from the API: ",
        error
      )
    );
}); */


//EventListener trials
/* document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners to the previous and next buttons
    document.getElementById("prevButton").addEventListener("click", () => {
      const prevPokemonId = parseInt(pokemonId) - 1;
  
      if (prevPokemonId >= 1) {
        const prevUrlWithId =
          "https://pokeapi.co/api/v2/pokemon/+ prevPokemonId;
        fetchPokemonDetails(prevUrlWithId);
      }
    });
  
    document.getElementById("nextButton").addEventListener("click", () => {
      const nextPokemonId = parseInt(pokemonId) + 1;
      const nextUrlWithId = "https://pokeapi.co/api/v2/pokemon/" + nextPokemonId;
      fetchPokemonDetails(nextUrlWithId);
    });
  }); */