import {Tournament} from "../../classes/Tournament/Tournament";

export default {
    createTournament({commit}, data) {
        return new Promise((resolve, reject) => {
            let tournament = new Tournament(data)
            if (tournament.participantsCount === Math.pow(2, Math.floor(Math.log(tournament.participantsCount) / Math.log(2)))) {
                commit('SET_TOURNAMENT', tournament)
                commit('SET_PARTICIPANT_COUNT', tournament.participantsCount)


                resolve(tournament)
            } else {
                reject((error) => console.log(error))
            }
        })
    },




}