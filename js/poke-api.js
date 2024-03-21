const pokemonApi = {}; //object to treat the API data

//Populating the Pokemon object

function convertPokeApiDetailToPokemon(pokemonApiDetail) {
  //here receive the JSON data from the URL
  const pokemon = new Pokemon(); //create a new Pokemon object
  pokemon.id = pokemonApiDetail.id;
  pokemon.name = pokemonApiDetail.name;

  const types = pokemonApiDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;
  pokemon.photo = pokemonApiDetail.sprites.other.dream_world.front_default;

  return pokemon;
}

//method of the object
pokemonApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json()) //Json converter
    .then(convertPokeApiDetailToPokemon);
};

//method of the object
pokemonApi.getPokemons = (offset = 0, limit = 20) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url) //returns readable stream as answer
    .then((response) => response.json()) //convert the stream in json
    .then((jsonBody) => jsonBody.results) //returns only the result that is the list it self and ignore the rest of the information
    .then((pokemons) => pokemons.map(pokemonApi.getPokemonDetail)) //receives the return of .getPokemonDetail(json) and save using .map
    .then((detailRequests) => Promise.all(detailRequests)) //receives the map and store every promises to populate "detailRequests"
    .then((pokemonsDetails) => pokemonsDetails);
};
