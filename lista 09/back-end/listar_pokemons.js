const Pok = require("./models/pokemons");
const fs = require('fs');
const path = require("path");

const dbpath = path.join(__dirname, "./pokedex-light.json");



class pokemonService{
        _pokemon = []
        
    loadPokemons(){
        const readpokemon = fs.readFileSync(dbpath);
        const Pokemons = JSON.parse(readpokemon, { columns: true });
        for(let Pokemon of Pokemons.pokemons){
            const id = Pokemon.id;
            const cover = Pokemon.sprites.other.home["front_default"];
            const nome = Pokemon.name;
            let tipo=[];
            for(let type of Pokemon.types){
                tipo.push(type["type"]["name"]);
               }
            const altura = Pokemon.weight;
            const peso = Pokemon.height;
            const pvMax = Pokemon.stats[0]["base_stat"];
            const ataque = Pokemon.stats[1]["base_stat"];
            const defesa = Pokemon.stats[2]["base_stat"];
            const ataque_especial = Pokemon.stats[3]["base_stat"];
            const defesa_especial = Pokemon.stats[4]["base_stat"];
            const velocidade = Pokemon.stats[5]["base_stat"];
            const pokemon = new Pok(id, cover, nome, tipo, altura, peso, pvMax, ataque, defesa, ataque_especial, defesa_especial, velocidade);
           this._pokemon.push(pokemon);
            
        } 
    }
    getAll(){
       
        const sendpokemon =  []
         if(this._pokemon.length == 0){
             this.loadPokemons();
         }
         for(let pokemon of this._pokemon){
           const {id, cover, nome, tipo, altura, peso, pvMax, ataque, defesa, ataque_especial, defesa_especial, velocidade}  = pokemon
           sendpokemon.push({
            id: id,
            cover: cover,
            nome: nome,
            tipo: tipo,
            altura: altura,
            peso: peso,
            pvMax: pvMax,
            ataque: ataque,
            defesa: defesa,
            ataque_especial: ataque_especial,
            defesa_especial: defesa_especial,
            velocidade: velocidade

           })
         }
         return sendpokemon;
    }
    getById(id) {
        if(this._pokemon.length == 0) {
            this.loadPokemons();
        }
        //console.log(this._pokemon.find(pokemon => pokemon.id == id))
        return this._pokemon.find(pokemon => pokemon.id == id)
    }
}
/* function listagemPokemon(){
   
    const readpokemon = fs.readFileSync(dbpath);
    const Pokemons = JSON.parse(readpokemon, { columns: true });

    const arraypokemon = [];
          
            for(let Pokemon of Pokemons.pokemons){
                
                
                const id = Pokemon.id;
                const cover = Pokemon.sprites.other.home["front_default"];
                const nome = Pokemon.name;
                let tipo=[];
                for(let type of Pokemon.types){
                    tipo.push(type["type"]["name"]);
                   }
                const altura = Pokemon.weight;
                const peso = Pokemon.height;
                const pvMax = Pokemon.stats[0]["base_stat"];
                const ataque = Pokemon.stats[1]["base_stat"];
                const defesa = Pokemon.stats[2]["base_stat"];
                const ataque_especial = Pokemon.stats[3]["base_stat"];
                const defesa_especial = Pokemon.stats[4]["base_stat"];
                const velocidade = Pokemon.stats[5]["base_stat"];
                const pokemon = new Pok(id, cover, nome, tipo, altura, peso, pvMax, ataque, defesa, ataque_especial, defesa_especial, velocidade);
                arraypokemon.push(pokemon);
                
            }  
           // console.log(arraypokemon);
        return arraypokemon;
        
            
  } */
module.exports = pokemonService;


