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
            tournamentRoundList.push(new TournamentRound(i + 1))
        }
        commit('SET_ROUND_LIST', tournamentRoundList)
    },

    //список матчей для рауднда
    createMatchList({commit, getters}) {
        let matchList = []
        let participant1 = new TournamentRoundMatchParticipant({
            id: `e${(+new Date).toString(15)}`,
            name: '',
            team: {}
        })
        let participant2 = new TournamentRoundMatchParticipant({
            id: `f${(+new Date).toString(15)}`,
            name: '',
            team: {}
        })

        getters.getRoundList.forEach((round) => {
            let roundNumber = round.numberRound
            for (let i = 0; i < getters.getParticipantCount / Math.pow(2, roundNumber); i++) {
                let numberMatch = i + 1
                let currentMatch = new TournamentRoundMatch(roundNumber, numberMatch, participant1, participant2)
                matchList.push(currentMatch)
            }
        })
        commit('SET_MATCH_LIST', matchList)
    }
}