const Pok = require("./models/pokemons");
const fs = require('fs');
const path = require("path");

const dbpath = path.join(__dirname, "./pokedex-light.json");
function listagemPokemon(){
    const readpokemon = fs.readFileSync(dbpath);
    const Pokemons = JSON.parse(readpokemon, { columns: true });
    const arraypokemon = [];
          
            for(let Pokemon of Pokemons.pokemons){
                
                const id = Pokemon.id;
                const cover = Pokemon.sprites.other.home["front_default"];
                const nome = Pokemon.name;
                const pvMax = Pokemon.stats[0]["base_stat"];
                const ataque = Pokemon.stats[1]["base_stat"];
                const defesa = Pokemon.stats[2]["base_stat"];
                const ataque_especial = Pokemon.stats[3]["base_stat"];
                const defesa_especial = Pokemon.stats[4]["base_stat"];
                const velocidade = Pokemon.stats[5]["base_stat"];
                const pokemon = new Pok(id, cover, nome, pvMax, ataque, defesa, ataque_especial, defesa_especial, velocidade);
                arraypokemon.push(pokemon);
                 
            }  
           // console.log(arraypokemon);
        return arraypokemon;
        
       
  }
module.exports = listagemPokemon;


