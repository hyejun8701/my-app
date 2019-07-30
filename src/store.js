import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        message: '메세지'
    },
    mutations: {
        // increment(state) {
        //     state.count++
        // }
        increment: state => { state.count++ }
    }
})

export default store