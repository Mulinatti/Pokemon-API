async function getPokemonData(id) {
    try {
        const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = await url.json();

        const pokemonInfo = {
            name: pokemonData.name,
            id: pokemonData.id,
            picture: pokemonData.sprites.front_default,
            types: pokemonData.types,
            color: pokemonData.color
        }

        console.log(pokemonInfo.color);
        return pokemonInfo
    }
    catch(erro) {
        console.log("Não foi possível obter os dados");
        console.log(erro);
    }
}

const input = document.getElementById("pokemonInput");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    const main = Promise.resolve(getPokemonData(input.value));
    const sectionTag = document.querySelector("section");

    main.then((pokemon) =>{
    
        sectionTag.innerHTML = 
        `
        <div class="text-stone-50 w-44 p-3 bg-lime-600 flex flex-col items-center rounded-lg shadow-md">
            <img class="w-36 bg-lime-700 rounded-lg" src="${pokemon.picture}">
            <div class="flex flex-col items-center justify-around h-14">
                <p class="font-bold text-lg capitalize">${pokemon.name}</p>
                <p class="font-extralight">${pokemon.id}</p>
            </div>
            <div class="w-full flex items-center justify-around type-box">
            </div>
        </div>
        `
        pokemonType = pokemon.types;
        pokemonType.forEach(type => {
            const tipagem = document.querySelector(".type-box");
            tipagem.innerHTML += 
            `
            <p class="p-1 w-type bg-green-800 text-center rounded-xl capitalize">${type.type.name}</p>
            `
        })
    });
});