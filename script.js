const audio = new Audio("button.mp3");
button.preload ="auto";

document.getElementById("Pokemonname")
  .addEventListener("keyup", function (event) {
    console.log("Key pressed: ", event.key); 
    if (event.key === "Enter") {
      showPokemon();
    }
  });


function showPokemon() {
  const pokemon = document.getElementById("Pokemonname").value.toLowerCase();
  const resultdiv = document.getElementById("result");

  const availablepokemons = [
    "arcanine",
    "alakazam",
    "charizard",
    "lapras",
    "charmeleon",
    "charmander",
    "venusaur",
    "raichu",
    "dragonite"
  ];

  resultdiv.innerHTML = "";

  if (availablepokemons.includes(pokemon)) {
    const img = document.createElement("img");
    img.src = `${pokemon}.webp`;
    img.onerror = () => {
      img.src = `${pokemon}.png`;
    };
    img.onload = () => {
  audio.currentTime = 0;
  audio.play();
};
    img.alt = pokemon;
    img.style.width = "200px";
    resultdiv.appendChild(img);
   } 
  else {
    resultdiv.textContent = `Sorry, I don't have an image of ${pokemon}.`;
    resultdiv.style.color = "red";
  }
 
  
}