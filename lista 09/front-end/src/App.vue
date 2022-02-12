<script setup>
      
    import { useStore } from 'vuex'
   

    const store = useStore()
    store.dispatch('getPokemons')
    
</script>

<template>
    <router-view></router-view>
    
</template>

