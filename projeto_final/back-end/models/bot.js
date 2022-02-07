//carregando modulos
const { Telegraf } = require('telegraf')
const bot1 = new Telegraf('1600555775:AAFJB8rQK3AF5XtprGav5shArGOUK6KEFUo')
require("./db")
const mongoose = require('mongoose')
require("../models/CadMed")
require("../models/categoria")
const categoria = mongoose.model("categorias")
const medico = mongoose.model("medicos")



//variaveis
/* const help=`
Selecione o dia da consulta
/hora
`;
const opcao = `
/marcar - Para marcação de consultas
/consultas - Para ver consultas marcadas para você
`;
const area=`
/pediatria - Para Pediatria
/clinicogeral - Para Clinico Geral
/cardiologia - Para Cardiologia
`; */


//capturando o models categorias
async function getcategorias(){
    const categorias =  await categoria.find()
    const especialidades = []
    for(let categoria of categorias){
        const nome = categoria.nome
        especialidades.push(nome)   
    }
    
    return especialidades
}
//capturando o models medicos
async function getmedicos(){
    const medicos =  await medico.find()
    const med = []
    for(let medico of medicos){
        const nome = medico.nome
        med.push(nome)   
    }
    
    return med
}
//iniciando Bot

bot1.start(ctx =>{
   
    ctx.reply("Seja Bem vindo a Clinica Boa Saúde " + `${ctx.message.from.first_name}`);
    bot1.telegram.sendMessage(ctx.chat.id,"Como podemos lhe ajudar?",
    {
        reply_markup:{
            inline_keyboard:[
                [{text: 'Marcação de Consultas', callback_data:'marcar'}],
                [{text:'Desmarcar consulta', callback_data:'desmarcar'}]
            ]
        }
    }    
    )
   
})

 //marcação de consultas
bot1.action('marcar', ctx =>{
    getcategorias().then(especialidades => { 
       
     for(let especialidade of especialidades){   
    const cat = especialidade
    //console.log(a)
    bot1.telegram.sendMessage(ctx.chat.id,"Escolha uma especialidade", 
    {
        reply_markup:{
            inline_keyboard:[
                [{text: cat, callback_data:cat}]
            ]
        }
    }
    
    )

//escolhendo medico da consulta
    bot1.action(cat, ctx => {
        getmedicos().then(med => {
            for(let medicos of med){
                const medico = medicos
                bot1.telegram.sendMessage(ctx.chat.id,"Para qual medico de "+cat+" deseja marcar a consulta?", 
                {
                    reply_markup:{
                        inline_keyboard:[
                            [{text: medico, callback_data: medico}]

                        ]
                    }
                })
            }}).catch((err)=>{
                console.log("erro"+err)
            })
        
    })

}
})})

bot1.command('daniel', ctx=>{
    
        let dts = `lista de datas: \n`;
        datas.forEach(item=>{
        
        dts += `${item.data}\n`;
        
        })
        bot1.telegram.sendMessage(ctx.chat.id,"Em qual dia quer a consulta? "+ dts)
        ctx.reply( 
    `/07 - 07/06/2021 
    /09 - 09/06/2021 
    /11 - 11/06/2021
    `)
     

})  
bot1.command('07' , ctx =>{
     let horario = `lista de horarios: \n`;
    horas.forEach(item=>{    
    horario += `${item.id}. ${item.hora}\n`;
    }) 
    ctx.reply(horario);
    ctx.reply("para escolher o horario use /escolher id hora desejada");
}) 
bot1.command('escolher', ctx=> {
    let input = ctx.message.text.split(" ");
    if(input.length != 3){

        return;
    }
   // var  id = input[1];
    let id = input[1];
    let nome = input[2];
    var  sql = `UPDATE daniel SET status = '1', nome = '${nome}' WHERE id = '${id}' and id_data = 1 `;
        
    conn.query(sql, function(err, resultado){
        if(err){
          throw err;
            } 
        
        ctx.reply(`Consulta marcada ${nome}`);
        
        })
        
    })

bot1.command('09' , ctx =>{
        let horario = `lista de horarios: \n`;
       horas.forEach(item=>{    
       horario += `${item.id}. ${item.hora}\n`;
       }) 
       ctx.reply(horario);
       ctx.reply("para escolher o horario use /escolher id hora desejada");
   }) 
   bot1.command('escolher', ctx=> {
       let input = ctx.message.text.split(" ");
       if(input.length != 3){
   
           return;
       }
      // var  id = input[1];
       let id = input[1];
       let nome = input[2];
       var  sql = `UPDATE daniel SET status = '1', nome = '${nome}' WHERE id = '${id}' and id_data = '17'`;
           
       conn.query(sql, function(err, resultado){
           if(err){
             throw err;
               } 
           
           ctx.reply(`Consulta marcada ${nome}`);
           
           })
           
       })
bot1.command('consultas', ctx=>{
       let input = ctx.message.text.split(" ");
       if(input.length != 3){
   
        return;
    }
    // var  id = input[1];
       
        let nome = input[1];
        var  sql = `select hora from  daniel as a inner join horario as b on a.id_hora = b.Id_hora where nome = '${nome}'`;
            
        conn.query(sql, function(err, resultado){
            if(err){
            throw err;
                } 
            console.log(resultado);
           // ctx.reply(resultado);
            
            })
            
   })
bot1.launch();
module.exports = bot1;
