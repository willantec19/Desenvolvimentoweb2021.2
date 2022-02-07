//carregando modulos
    const express = require('express');
    const router = express.Router();
    const mongoose = require('mongoose')
    require("../models/CadMed")
    require("../models/categoria")
    const medico = mongoose.model("medicos")
    const flash = require("connect-flash")
    const session = require("express-session")
    const categoria = mongoose.model("categorias")
    const { JSDOM } = require( "jsdom" );
    const { window } = new JSDOM( "" );
    const $ = require( "jquery" )( window );

//configurações
    //sessao
        router.use(session({
            secret: "test",
            resave: true,
            saveUninitialized: true
        }))
        router.use(flash())
    //middleware
        router.use((req, res, next)=>{
            res.locals.success_msg = req.flash("success_msg")
            res.locals.error_msg = req.flash("error_msg")
            next()
        })

router.get('/', (req, res)=>{
    res.render('index')
});


//Cadastro de Categoria
router.get('/categoria', ((req, res)=>{
    categoria.find().sort({date:'desc'}).lean().then((categoria)=>{
        res.render('categoria', {categorias: categoria}) 
    }).catch((err)=>{
        console.log("error "+ err)
    })
  
}));
router.post('/cadastro-categoria', (req, res)=>{
    
    const novacategoria = {
        nome: req.body.nome
    }
    new categoria(novacategoria).save().then(()=>{
        req.flash("success_msg", "Cadastrado com sucesso")
        res.redirect("/categoria/")
        //console.log("categoria cadastrada")
        
    }).catch((err)=>{
        req.flash("error_msg", "Erro")
    })
});
//Editando Categoria
router.post("/editar-categoria", (req, res)=>{
        categoria.findOne({_id: req.body.id}).then((categoria)=>{
            categoria.nome = req.body.nome

            categoria.save().then(()=>{
                res.redirect("/categoria")
            }).catch((err)=>{
                console.log("erro ao editar"+err)
            })
        }).catch((err)=>{
            console.log("erro ao editar"+err)
        })

})
router.get("/editar-categoria/:id", (req, res) => { 
    categoria.findOne({_id: req.params.id}).sort({date:'desc'}).lean().then((categoria)=>{
        res.render("../views/editar-categoria", {categorias: categoria})
    }).catch((err)=>{
       // console.log("erro" + err)
        req.flash("error_msg", "Erro ao editar")
        res.redirect("/cadastro/")
    })
    
});

//Cadastrando Medicos
router.get('/cadastro', (req, res)=>{
    
    medico.find().sort({date:'desc'}).lean().then((medico)=>{
    categoria.find().sort({date:'desc'}).lean().then((categoria)=>{
       res.render('cadastro', {
            medicos: medico,
            categorias: categoria
        }) }).catch((err)=>{
            console.log("error "+ err) })
   }).catch((err)=>{
       console.log("error "+ err)
   })
   
});

router.post('/cadastro-medicos', (req, res)=>{
    
    var erros = [];
    
    if( req.body.nome == "" || req.body.nome == null){
        erros.push({texto: "Nome Invalido"})
    }
    if(req.body.email.indexOf(".") == -1 ||req.body.email.indexOf("@") == -1 || req.body.email == "" || req.body.email == null){
        erros.push({texto: "email Invalido"})
    }
    if(req.body.celular == "" || req.body.celular == null || req.body.celular.length < 8){
        erros.push({texto: "celular Invalido"})
    }
    if(erros.length >0){
        res.render("../views/cadastro", {erros: erros})
    }
    else{
      
        
     /*  const tipo =  $("#area").on('change', function(e){
            alert($(this).val())
            return false;
          }); */
         

       
        const novoMedico = {
            nome: req.body.nome,
            email: req.body.email,
            celular: req.body.celular,
            CRM: req.body.CRM,
            area: tipo
        }
        
        new medico(novoMedico).save().then(()=>{
            req.flash("success_msg", "Cadastrado com sucesso")
            res.redirect("/cadastro/")
            console.log("cadastrado")
            
        }).catch((err)=>{
            req.flash("error_msg", "Erro")
            console.log("erro"+err)
        })
   
    }
});


//Editando Medicos
router.post("/edit-medicos", (req, res) => {

    medico.findOne({_id: req.body.id}).then((medicos)=>{

            medicos.nome = req.body.nome
            medicos.email = req.body.email
            medicos.celular = req.body.celular
            medicos.CRM = req.body.CRM

            medicos.save().then(( ) => {
                req.flash("success_msg", "editado")
                res.redirect("/cadastro/")
            }).catch((err)=>{
                req.flash("error_msg", "Erro ao editar")
                res.redirect("/cadastro/")
            })
    }).catch((err)=>{
        req.flash("error_msg", "Erro ao editar")
        res.redirect("/cadastro/")
    })


});
router.get("/edit-medicos/:id", (req, res) => { 
    medico.findOne({_id: req.params.id}).sort({date:'desc'}).lean().then((medico)=>{
        res.render("../views/edit-medicos", {medicos: medico})
    }).catch((err)=>{
        req.flash("error_msg", "Erro ao editar")
        res.redirect("/cadastro/")
    })
    
});

module.exports = router;
