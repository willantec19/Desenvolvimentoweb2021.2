const moongoose = require("mongoose")
const Schema = moongoose.Schema;

const Categoria = new Schema({
    nome: {
        type: String,
        required: true
    }
})

moongoose.model("categorias", Categoria)