//carregando modulos
    const express = require('express');
    const app = express();
    const handlebars = require('express-handlebars')
    const bodyParser = require("body-parser")
    const router = require('./routes/rotas');
    require("./models/db")
    require("./models/bot")
// Configurações
    // Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())

 //config
    //template engine
        app.engine('handlebars', handlebars({defaultLayout:'main'}))
        app.set('view engine', 'handlebars') 
//rotas    
    app.use('/', router);
//Outros
    const port = 3000;
    app.listen(port, ()=>{
        console.log('rodando em http://localhost:', port, '');
    });
       
 