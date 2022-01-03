const port = 8080;
const express = require('express');
const app = express();

const pokerouter = require('./routes/pokemons');
const { engine } = require('express-handlebars');

app.engine('hbs', engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', './views');


app.use('/', pokerouter );
app.get('/', (req, res)=>{
    res.redirect('/pokemons');

});

app.listen(port, ()=>{
    console.log('rodando em http://localhost:', port, '');
});
       

