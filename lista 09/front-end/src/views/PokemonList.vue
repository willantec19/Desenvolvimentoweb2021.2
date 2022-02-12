<script setup>
    import { computed } from '@vue/runtime-core'
    import { useStore } from 'vuex'
    import PokemonCard from '../components/PokemonCard.vue'

    const store = useStore()
    store.dispatch('getPokemons')
    const pokemons = computed(()=> store.state.pokemons)
    
</script>
<template>
    <div>
       
    <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" 
    :id="pokemon.id" 
    :nome="pokemon.nome"
    :tipo="pokemon.tipo"
    :cover="pokemon.cover"
    >

    </PokemonCard>
    </div>
</template>