

class Pokemon{
   
    constructor(id, cover,nome,  pvMax, ataque, defesa, ataque_especial, defesa_especial, velocidade){
        this.id = id;
        this.cover = cover; 
        this.nome = nome;
        this.pvMax = pvMax;
        this.ataque = ataque;
        this.defesa = defesa;
        this.ataque_especial = ataque_especial;
        this.defesa_especial = defesa_especial;
        this.velocidade = velocidade;
    }

}
module.exports = Pokemon;
