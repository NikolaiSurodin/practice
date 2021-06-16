import {Tournament} from "../../classes/Tournament/Tournament";

export default {
    state: {
        tournament: JSON.parse(localStorage.getItem('tournament')) || {},
        machList: {},
        roundList: {},
        participantsList:[],
        participantsCount: null
    },
    actions: {
        setTournament({commit}, data) {
            let tournament = new Tournament(data)
            commit('SET_TOURNAMENT', tournament)
            console.log(tournament)
        }
    },
    mutations: {
        SET_TOURNAMENT(state, data) {
            state.tournament = data
            localStorage.setItem('tournament', JSON.stringify(state.tournament))
            state.participantsCount = data.participantsCount
        },

    },
    getters: {
        tournament(state){
            return state.tournament
        }
    }
}