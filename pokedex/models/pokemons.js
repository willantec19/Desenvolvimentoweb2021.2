

class Pokemon{
   
    constructor(id, cover,nome, tipo, peso, altura,  pvMax, ataque, defesa, ataque_especial, defesa_especial, velocidade){
        this.id = id;
        this.cover = cover; 
        this.nome = nome;
        this.tipo = tipo;
        this.peso = peso;
        this.altura = altura;
        this.pvMax = pvMax;
        this.ataque = ataque;
        this.defesa = defesa;
        this.ataque_especial = ataque_especial;
        this.defesa_especial = defesa_especial;
        this.velocidade = velocidade;
    }

}
module.exports = Pokemon;
