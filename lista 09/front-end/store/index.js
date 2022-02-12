import { createStore } from 'vuex'
import Axios from 'axios'

const state = {
    pokemons: [],
    pokemon: null
}
const getters = {
    NumberOfPokemons(state){
        return state.pokemons.length
    }

}

const mutations = {
    setPokemons(state, pokemons){
        state.pokemons = pokemons
    },
    setPokemon(state, pokemon){
        state.pokemon = pokemon
    }
}

const actions = {
    async getPokemons({ commit }){
        try {
            const response = await axios.get('/pokemons')
            commit('setPokemons', response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    },
    async getPokemon({ commit }, id){
        try {
            const response = await axios.get(`/pokemons/${id}`)
            commit('setPokemon', response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

}



export const store = createStore({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
})
export const axios = Axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 1000,
    headers: {
       Accept: "application/json",
        "Content-Type": "application/json"
    }

})