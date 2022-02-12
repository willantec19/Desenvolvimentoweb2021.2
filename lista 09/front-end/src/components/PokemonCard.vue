<script setup>
import { computed, getCurrentInstance } from "@vue/runtime-core"

const axios = getCurrentInstance().appContext.config.globalProperties.axios


 const props = defineProps({
    id: Number,
    cover: URL,
    nome: String,
    tipo: String
    
})
const imgAlt = computed(()=> `${props.nome}`)
const imgURL = computed(() => ` ${props.cover}`)

</script>

<template>
    <div class="col mt-2" >
       <router-link :to="`/pokemons/${this.id}`" class="text-decoration-none text-reset">
          <div class="card shadow-sm">
           <img :src="imgURL" width="200" class="rounded mx-auto d-block" >

            <div class="card-body">
                <h5 class="card-title text-center">{{this.nome}}</h5>
             
              <div class="d-flex justify-content-between align-items-center">
                  
                <div class="btn-group mx-auto">
                  <button type="button" class="btn btn-sm btn-outline-success" disabled>{{this.tipo}}</button>
                  
                  
                </div>
               
              </div>
            </div>
          </div>
          </router-link>
        </div>
</template>