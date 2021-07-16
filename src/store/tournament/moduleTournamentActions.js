import {Tournament} from "@/classes/Tournament/Tournament";
import {TournamentRound} from "@/classes/Tournament/TournamentRound";
import {TournamentRoundMatch} from "@/classes/Tournament/TournamentRoundMatch";

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
    //список матчей для раунда
    createMatchList({commit, getters}) {
        let matchList = []
        getters.getRoundList.forEach((round) => {
            let numberRound = round.numberRound
            for (let i = 0; i < getters.getParticipantCount / Math.pow(2, numberRound); i++) {
                let numberMatch = i + 1
                    let currentMatch = new TournamentRoundMatch(numberRound, numberMatch)
                    matchList.push(currentMatch)
            }
        })
        commit('SET_MATCH_LIST', matchList)
    },
    createScore({commit, getters}) {
        let scoreForMatch = getters.getTournament.scoreForMatch
        commit('SET_SCORE_TOURNAMENT_MATCH', scoreForMatch)
    },
    addPointForParticipant({commit, getters}, payload) {
        payload.participant.score++
        let participantList = payload.participantList
        let match = payload.match
        let scoreOfTournamentGames = getters.getTournament.numberOfGames
        commit('SET_SCORE_FOR_PLAYER', payload)
        if (participantList[0].score + participantList[1].score === scoreOfTournamentGames){
         match.matchWinner =  participantList[0].score > participantList[1].score ? participantList[0] : participantList[1]
            commit('SET_TOURNAMENT_MATCH_WIN_LIST', match.matchWinner)
        }

    },
    createTournamentWinner({commit, getters}) {
        let matchList = getters.getMatchList
        let lastMatch = matchList[matchList.length - 1]
        let lastParticipantList = lastMatch.participantList
        let winner = lastParticipantList[0].score > lastParticipantList[1].score ? lastParticipantList[0] : lastParticipantList[1]
        commit('SET_TOURNAMENT_WINNER', winner)
    }
}