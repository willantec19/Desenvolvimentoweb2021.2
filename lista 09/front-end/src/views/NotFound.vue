<script setup>

const props = defineProps({
    msg: String
})
</script>

<template>
    <h1>Ops... Alguma coisa deu errado</h1>
      <h2 v-if="msg != undefined" class="text-muted">{{msg}}</h2>

    
</template>