import Vue from 'vue'
import Vuex from 'vuex'

import moduleTournament from "./tournament/moduleTournament";
import moduleParticipantName from "./participantName/moduleParticipantName"


Vue.use(Vuex)
export const store = new Vuex.Store({
    modules: {
        moduleTournament,
        moduleParticipantName
    }
})