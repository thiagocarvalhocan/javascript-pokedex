const urlParameters = new URLSearchParams(window.location.search);
const pokemonId = urlParameters.get("id");
const urlWithId = "https://pokeapi.co/api/v2/pokemon/" + pokemonId;
const detailedPokemon = document.getElementById("detailExpanded"); //Locating and defining where the dynamic HTML goes

function convertPokemonDetailsToLi(details) {
  //Dynamic background using "classList.add" to access the class style at the CSS;
  detailedPokemon.classList.add(details.types[0].type.name);

  detailedPokemon.innerHTML = `
  <li class="pokemon">
    <span id="goBack"><a href="index.html"><img class="Click to go back" src=".\\img\\goback.png"></a></span>
    <span class="name">${details.name}</span>
    <span class="number">#${details.id}</span>
    <div class="detail">
      <ol class="typesDetail">
        ${details.types
          .map(
            (type) =>
              `<li class="type ${type.type.name}">${type.type.name}</li>`
          )
          .join("")}
      </ol>
      
    </div>
    <div class="img_background">
      <img id="photo" src="${
        details.sprites.other.dream_world.front_default
      }" alt="${details.name}">
    </div>
    <div class="detail ">
      <div id="morePokemonInfo" class="moreDetails box">

        <p class="statusDesc">Pokémon Base Status</p>
        <div class="infoList">
          <div class="info">HP: ${
            details.stats.find((stat) => stat.stat.name === "hp").base_stat
          }
          </div>
          <div class="bar"> 
            <div class="percentageBar" style="width: ${Math.round(
              (details.stats.find((stat) => stat.stat.name === "hp").base_stat /
                256) *
                100
            ).toFixed(1)}%; border-right: #000 solid 3px; height: 17px;">
            </div>
            <div class="percentage">${Math.round(
              (details.stats.find((stat) => stat.stat.name === "hp").base_stat /
                256) *
                100
            ).toFixed(1)}%
            </div>
          </div>
        </div>

        <div class="infoList">
          <div class="info">Attack: ${
            details.stats.find((stat) => stat.stat.name === "attack").base_stat
          }
          </div>
          <div class="bar">
            <div class="percentageBar" style="width: ${Math.round(
              (details.stats.find((stat) => stat.stat.name === "attack")
                .base_stat /
                256) *
                100
            ).toFixed(1)}%; border-right: #000 solid 3px; height: 17px;">
            </div>
            <div class="percentage">${Math.round(
              (details.stats.find((stat) => stat.stat.name === "attack")
                .base_stat /
                256) *
                100
            ).toFixed(1)}%
            </div>
          </div>
        </div>

        <div class="infoList">
          <div class="info">Defense: ${
            details.stats.find((stat) => stat.stat.name === "defense").base_stat
          }
          </div>
          <div class="bar">
            <div class="percentageBar" style="width: ${Math.round(
              (details.stats.find((stat) => stat.stat.name === "defense")
                .base_stat /
                256) *
                100
            ).toFixed(1)}%; border-right: #000 solid 3px; height: 17px;">
            </div>
            <div class="percentage">${Math.round(
              (details.stats.find((stat) => stat.stat.name === "defense")
                .base_stat /
                256) *
                100
            ).toFixed(1)}%
            </div>
          </div>
        </div>

        <div class="infoList">
          <div class="info">Sp. Atk.: ${
            details.stats.find((stat) => stat.stat.name === "special-attack")
              .base_stat
          }
          </div>
          <div class="bar">
            <div class="percentageBar" style="width: ${Math.round(
              (details.stats.find((stat) => stat.stat.name === "special-attack")
                .base_stat /
                256) *
                100
            ).toFixed(1)}%; border-right: #000 solid 3px; height: 17px;">
            </div>
            <div class="percentage">${Math.round(
              (details.stats.find((stat) => stat.stat.name === "special-attack")
                .base_stat /
                256) *
                100
            ).toFixed(1)}%
            </div>
          </div>
        </div>

        <div class="infoList">
          <div class="info">Sp. Def.: ${
            details.stats.find((stat) => stat.stat.name === "special-defense")
              .base_stat
          }
          </div>
          <div class="bar">
            <div class="percentageBar" style="width: ${Math.round(
              (details.stats.find(
                (stat) => stat.stat.name === "special-defense"
              ).base_stat /
                256) *
                100
            ).toFixed(1)}%; border-right: #000 solid 3px; height: 17px;">
            </div>
            <div class="percentage">${Math.round(
              (details.stats.find(
                (stat) => stat.stat.name === "special-defense"
              ).base_stat /
                256) *
                100
            ).toFixed(1)}%
            </div>
          </div>
        </div>

        <div class="infoList">
          <div class="info">Speed: ${
            details.stats.find((stat) => stat.stat.name === "speed").base_stat
          }
          </div>
          <div class="bar">
            <div class="percentageBar" style="width: ${Math.round(
              (details.stats.find((stat) => stat.stat.name === "speed")
                .base_stat /
                256) *
                100
            ).toFixed(1)}%; border-right: #000 solid 3px; height: 17px;">
            </div>
            <div class="percentage">${Math.round(
              (details.stats.find((stat) => stat.stat.name === "speed")
                .base_stat /
                256) *
                100
            ).toFixed(1)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
`;
}

fetch(urlWithId)
  .then((response) => response.json())
  .then((convertedResponse) => {
    convertPokemonDetailsToLi(convertedResponse);
  })
  .catch((error) =>
    console.error("Something went wrong getting Pokémon data: ", error)
  );
