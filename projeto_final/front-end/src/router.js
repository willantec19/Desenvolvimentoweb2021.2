import { createRouter, createWebHistory  } from 'vue-router';
import Home from './views/Home.vue'
const routes = [
    {
        path:'/',
        name:'Home',
        component: Home

    },
    {
        path:'/Categoria',
        name:'Categoria',
        component: ()=> import('./views/Categoria.vue')
    },
    {
        path:'/Cadastro',
        name:'Cadastro',
        component: ()=> import('./views/Cadastro.vue')
    }
] 
   
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router; 
