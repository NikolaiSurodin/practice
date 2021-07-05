import {Tournament} from "@/classes/Tournament/Tournament";
import {TournamentRound} from "@/classes/Tournament/TournamentRound";
import {TournamentRoundMatch} from "@/classes/Tournament/TournamentRoundMatch";
import {TournamentRoundMatchParticipant} from "@/classes/Tournament/TournamentRoundMatchParticipant";

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
                dispatch('createScore')
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
        let matchList = getters.getMatchList
        for (let i = 0; i < getters.getTournament.roundCount; i++) {
            tournamentRoundList.push(new TournamentRound(i + 1, matchList))
        }
        commit('SET_ROUND_LIST', tournamentRoundList)

    },
    createScore({commit, getters}) {
        let scoreForMatch = getters.getTournament.scoreForMatch
        commit('SET_SCORE_TOURNAMENT_MATCH', scoreForMatch)
    },
    addScore({commit}, payload) {
        commit('SET_SCORE_FOR_PLAYER', payload)
    },
    //список матчей для раунда
    createMatchList({commit, getters}) {
        let matchList = []
        getters.getRoundList.forEach((round) => {
            let numberRound = round.numberRound
            for (let i = 0; i < getters.getParticipantCount / Math.pow(2, numberRound); i++) {
                let numberMatch = i + 1
                let currentYear = new Date().getFullYear()
                let month = Math.floor(Math.random() * 11)
                let date = Math.floor(Math.random() * 31)
                let currentMatch = new TournamentRoundMatch(new Date(currentYear, month, date).toISOString().substring(0, 10), numberRound, numberMatch,
                    new TournamentRoundMatchParticipant({
                        name: 'Player1',
                        score: 0
                    }),
                    new TournamentRoundMatchParticipant({
                        name: 'Player2',
                        score: 0
                    }))
                matchList.push(currentMatch)
            }
        })
        commit('SET_MATCH_LIST', matchList)
    }
}