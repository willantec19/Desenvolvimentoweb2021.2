<template>

<div class="container-fluid col-10 mt-2">
    <div class="justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>Cadastro</h3>
            
            <div class="card">
                <div class="card-body">
                <h5 class="text-center mb-4">Dados Pessoais</h5>
                <form class="form-card" action="/cadastro-medicos" method="post">
                    <div class="align-middle ">
                        <div class="form-group col-sm-6 mt-2 flex-column d-flex"> <label class="form-control-label px-4"></label> <input type="text" id="nome" name="nome" v-model="nome" placeholder="Nome" > </div>
                        <div class="form-group col-sm-6 mt-2 flex-column d-flex"> <label class="form-control-label px-3"></label> <input type="text" id="email" name="email" v-model="email" placeholder="Email" > </div>
                        <div class="form-group col-sm-6 mt-2 flex-column d-flex"> <label class="form-control-label px-3"></label> <input type="text" id="celular" name="celular" v-model="celular" placeholder="Celular" > </div>
                        <div class="form-group col-sm-6 mt-2 flex-column d-flex"> <label class="form-control-label px-3"></label> <input type="text" id="CRM" name="CRM" v-model="CRM" placeholder="CRM" > </div>
                        <div class="form-group col-sm-6 mt-2 flex-column d-flex"> <label class="form-control-label px-3"></label>  
                            <select class="form-select" aria-label="Default select example" v-model="area" id="area">
                              <option selected>Área de Atuação</option>
                              
                              <option value="{{this._id}}">{{this.nome}}</option>
                              
                            </select>
                        </div>
                    </div>
                    <div class="row justify-content-end">
                      <div class="form-group col-sm-6"> <button class="btn-block btn-primary" id="button">Cadastrar</button> </div>
                    </div>
                </form>
            </div></div>
        </div>
        </div>
 
  <div class="table-responsive-sm">  
<table class="table table-dark table-striped mt-4">
  <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Email</th>
      <th scope="col">Celular</th>
      <th scope="col">CRM</th>
      <th scope="col">Area de Atuação</th>
      <th></th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>{{this.nome}}</td>
      <td>{{this.email}}</td>
      <td>{{this.celular}}</td>
      <td>{{this.CRM}}</td>
      <td>{{this.area}}</td>
      <div><td><a href="/edit-medicos/{{this._id}}"><button class="btn btn-success "><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button></a></td></div>
    </tr>
    </tbody>
      </table>
      
       </div> 

  </div>   


</template>
<script>
    export default {
        name: "Cadastro",
        data(){
          return{
            nome:null,
            email:null,
            celular:null,
            CRM: null,
            area: null
          }
        },
        methods:{
          async getcadastro(){
            const req = await fetch("http://localhost:3000/Cadastro");
            
          }
        }
    }
    
</script>