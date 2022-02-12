const express = require('express');
const listagemPokemon = require("../listar_pokemons");
const router = express.Router();
const pokemons = listagemPokemon();
router.get('/pokemons', (req, res)=>{
    res.render('index', {
            pageTitle: 'Pokedex', 
                         pokemons: pokemons});

});

router.get('/pokemons/:id', (req, res)=>{
   
  for(let pokemon of pokemons){
    const ide = req.params.id;
      if(Number(pokemon.id) === Number(ide)){
          //console.log(pokemon);
            res.render('tipos',{
            
                ide: ide,
                pokemon: pokemon
                
            });
        };
    };
    
 
   
});
module.exports = router;