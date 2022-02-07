const mongoose = require('mongoose');

//configurando o mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/bottelegram").then(() => {
        console.log("Conectado")
    }).catch((err) => {
        console.log("erro ao conectar"+ err)
    })



 