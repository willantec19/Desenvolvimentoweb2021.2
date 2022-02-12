const express = require('express');
const pokemonService = require("../listar_pokemons");
const router = express.Router();
const pokemon = new pokemonService();

router.get('/pokemons', (req, res)=>{
    const pokemons = pokemon.getAll();
    res.status(200).json(pokemons)
    
});

router.get('/pokemons/:id', (req, res)=>{
    const id = Number(req.params.id)
    const pokemonsid = pokemon.getById(id) 
  
    if(pokemonsid){
       
         //console.log(pokemon);
           res.status(200).json(pokemonsid)
      
        }else{
            res.status(404).json({ msg: "Pokemon nao encontrato"})
        }
}); 
 
   

module.exports = router;