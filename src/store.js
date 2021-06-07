import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// the root, initial state object
const state = {
    count: 2
}

const actions = {
    increment({ commit }) {
        commit('increment');
        console.log('____Call actions:', commit);
    }
}

// define the possible mutations that can be applied to our state
const mutations = {
    increment(state, payload) {
        state.count++;
        console.log('payload', payload);
    }
}

const getters = {
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})