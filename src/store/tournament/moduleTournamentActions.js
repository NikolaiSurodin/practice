import {Tournament} from "../../classes/Tournament/Tournament";
import {TournamentRound} from "../../classes/Tournament/TournamentRound";
import {TournamentRoundMatch} from "../../classes/Tournament/TournamentRoundMatch";
import {TournamentRoundMatchParticipant} from "../../classes/Tournament/TournamentRoundMatchParticipant";

export default {
    createTournament({commit, dispatch}, data) {
        return new Promise((resolve, reject) => {
            let tournament = new Tournament(data)
            if (tournament.participantsCount === Math.pow(2, Math.floor(Math.log(tournament.participantsCount) / Math.log(2)))) {
                commit('SET_TOURNAMENT', tournament)
                commit('SET_PARTICIPANT_COUNT', tournament.participantsCount)
                dispatch('createRoundCount')
                dispatch('createRoundList')
                dispatch('createMatchList')
                resolve(tournament)
            } else {
                reject((err) => err)
            }
        })
    },
    // число раундов
    createRoundCount({commit, state}) {
        let roundCount = Math.log(state.participantsCount) / Math.log(2)
        commit('SET_ROUND_COUNT', roundCount)
    },
    // список раундов
    createRoundList({commit, getters}) {
        let tournamentRoundList = []
        for (let i = 0; i < getters.getTournament.roundCount; i++) {
            tournamentRoundList.push(new TournamentRound())
        }
        commit('SET_ROUND_LIST', tournamentRoundList)
    },

    //список матчей для рауднда
    // кол-во матчей для раунда = кол-во участников / ( 2 * номер раунда)
    createMatchList({commit, state}) {
        let matchList = state.roundList
        matchList.forEach((tournamentRound) => {
            for (let i = 0; i < state.participantsCount; i++) {
                tournamentRound.matchList.push(new TournamentRoundMatch(new TournamentRoundMatchParticipant({name: 'player1'}), new TournamentRoundMatchParticipant({name: 'player2'})))
            }
        })
        console.log(matchList)
        commit('SET_MATCH_LIST', matchList)
    }
}