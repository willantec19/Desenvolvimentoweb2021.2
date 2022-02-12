const express = require('express');
const app = express();
const pokerouter = require('./routes/pokemons');
const cors = require('cors');
const port = 8080;

app.use(cors())
app.use('/', pokerouter );

app.get('/', (req, res)=>{
    res.redirect('/pokemons');

});

app.listen(port, ()=>{
    console.log('rodando em http://localhost:', port, '');
});
       

