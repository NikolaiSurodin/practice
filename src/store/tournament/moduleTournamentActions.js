import {Tournament} from "../../classes/Tournament/Tournament";

export default {
    createTournament({commit}, data) {
        let tournament = new Tournament(data)
        commit('SET_TOURNAMENT', tournament)
        console.log(tournament)
    }
}