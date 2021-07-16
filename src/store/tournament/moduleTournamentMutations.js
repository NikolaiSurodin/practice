export default {
    SET_TOURNAMENT(state, data) {
        state.tournament = data
    },
    SET_PARTICIPANT_COUNT(state, data) {
        state.participantsCount = data
    },
    SET_ROUND_COUNT(state, data) {
        state.tournament.roundCount = data
    },
    SET_ROUND_LIST(state, data) {
        state.roundList = data
        state.tournament.roundList = data
    },
    SET_MATCH_LIST(state, data) {
        state.matchList = data
        state.tournament.matchList = data
    },
    SET_SCORE_FOR_PLAYER() {

    },
    SET_TOURNAMENT_WINNER(state, data) {
        state.tournament.winner = data
    },
    SET_SCORE_TOURNAMENT_MATCH(state, data) {
        state.tournament.scoreForMatch = data
        state.matchList.forEach(e => e.score = data)
    },
    SET_TOURNAMENT_MATCH_WIN_LIST(state, data){
        state.winnerList.push(data)
    }
}