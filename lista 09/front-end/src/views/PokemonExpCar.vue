<script setup>
    import { computed, getCurrentInstance } from "vue"
    import { useStore } from "vuex"
    import { useRoute,  onBeforeRouteUpdate } from "vue-router"
    
const axios = getCurrentInstance().appContext.config.globalProperties.axios


 const props = defineProps({
    id: Number,
    cover: URL
    
})

const store = useStore()
const route = useRoute()
onBeforeRouteUpdate((to , from)=>{
    if(to.params.id !== from.params.id){
        store.dispatch('getPokemon', to.params.id)
    }
})

store.dispatch('getPokemon', route.params.id)

const pokemon = computed(() => store.state.pokemon)
const imgURL = computed(() => `${props.cover}`)
const NumberOfPokemons = computed(() => store.getters.NumberOfPokemons)
</script>
<template>
    <div class="row align-items-center">
    <div class="col-md-2">
        <router-link :to="`/pokemons/${Math.max(1, id - 1)}`" >
            <button type=" button" class="btn btn-lg btn-outline-danger" :class="{disabled: Number(id) === 1}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            </button>
        </router-link>
    </div>
      <div class="card mb-3" :v-if="pokemon !== null">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="imgURL" class="img-fluid rounded-start">
                
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{pokemon.nome}}</h5>
                    #{{pokemon.id}} {{pokemon.tipo}}
                     <div class="card-body">
                        Peso:  {{pokemon.peso}} lbs <br>
                        Altura: {{pokemon.altura}}"<br>
                        Base stats: <br>
                     </div>
                        <hr>
                        <p class="card-text">
                        PvMax: 
                            {{pokemon.pvMax}}  <br>         
                        Ataque:
                            {{pokemon.ataque}} <br>
                        Defesa:
                            {{pokemon.defesa}} <br>
                        Ataque Esp.:
                            {{pokemon.ataque_especial}} <br>
                    
                        Defesa Esp.:
                            {{pokemon.defesa_especial}} <br>
                        
                        Velocidade:
                            {{pokemon.defesa_especial}} <br>
                    </p>
                    
                </div>
                </div>
        </div>
        <div class="col-md-2"> 
        <router-link :to="`/pokemons/${Math.min(Number(id) + 1, NumberOfPokemons)}`">
            <button type=" button" class="btn btn-lg btn-outline-danger">
             <i class="bi bi-arrow-left-square-fill">   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></i>
            </button>
        </router-link>
    </div>
</div>
</div>
    
       
</template>