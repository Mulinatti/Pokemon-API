async function getPokemonData(id) {
    try {
        const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = await url.json();

        const pokemonInfo = {
            name: pokemonData.name,
            id: pokemonData.id,
            picture: pokemonData.sprites.front_default
        }

        console.log(pokemonInfo.picture);
        return pokemonInfo
    }
    catch(erro) {
        console.log("Não foi possível obter os dados");
        console.log(erro);
    }
}


const main = Promise.resolve(getPokemonData("1"));
const mainTag = document.querySelector("main");

main.then((pokemon) =>{

    mainTag.innerHTML += 
    `
    <main class="font-nunito flex items-center justify-center h-screen">
        <div class=" text-stone-50 w-44 p-3 bg-lime-600 flex flex-col items-center rounded-lg shadow-md">
            <img class="w-36 bg-lime-700 rounded-lg" src="${pokemon.picture}">
            <div class="flex flex-col items-center justify-around h-14">
                <p class="font-bold text-lg capitalize">${pokemon.name}</p>
                <p class="font-extralight">${pokemon.id}</p>
            </div>
            <div class="w-full flex items-center justify-between">
                <p class="p-1 w-type bg-green-800 text-center rounded-xl">Grass</p>
                <p class="p-1 w-type bg-lime-700 text-center rounded-xl">Bug</p>
            </div>
        </div>
    `
});