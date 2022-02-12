import { createRouter, createWebHistory  } from 'vue-router';
import PokemonList from './views/PokemonList.vue'
import PokemonExpCar from './views/PokemonExpCar.vue'
import NotFound from './views/NotFound.vue'
const routes = [
    {
        path:"/",
        component: PokemonList,
        alias: "/pokemons"
    },
    {
        path:"/pokemons/:id",
        component: PokemonExpCar,
        name: 'pokemonDetails',
        props: true
    },
    {
        path: '/404',
        component: NotFound,
        name: 'notFound',
        props: true
    }

    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;  