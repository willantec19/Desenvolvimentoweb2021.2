const moongoose = require("mongoose")
const Schema = moongoose.Schema;

const Medico = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    celular:  {
        type: String,
        required: true
    },
    CRM:{
        type: String,
        required: true
    },
    /*  area:{
        type: moongoose.ObjectId,
        ref:'categorias',
        required: true
    }  */
});

moongoose.model("medicos", Medico)