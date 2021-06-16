import Vue from 'vue'
import Vuex from 'vuex'

import moduleTournament from "./tournament/moduleTournament";


Vue.use(Vuex)
export const store = new Vuex.Store({
    modules:{
        moduleTournament
    }
})