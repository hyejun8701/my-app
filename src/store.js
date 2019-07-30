import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        message: '메세지',
        list: [
            { id: 1, name: 'apple', price: 100 },
            { id: 2, name: 'banana', price: 200 },
            { id: 3, name: 'strawberry', price: 300 }
        ]
    },
    mutations: {
        // increment(state) {
        //     state.count++
        // }
        increment: state => { state.count++ },
        mutationType(state, payload) {
            state.count = payload
        }
    },
    getters: {
        count(state, getters, rootState, rootGetters) {
            return state.count
        },
        max(state) {
            return state.list.reduce((a, b) => {
                return a > b.price ? a : b.price
            }, 0)
        },
        item(state) {
            return id => state.list.find(el => el.id === id)
        },
        name(state, getters) {
            return id => getters.item(id).name
        }
    },
    actions: {
        actionType({ commit }, payload) {
            commit('mutationType', payload)
        }
    }
})

export default store