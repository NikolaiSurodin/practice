
export default {
    SET_TOURNAMENT(state, data){
        state.tournament = data
    },
    SET_PARTICIPANT_COUNT(state, data){
        state.participantsCount = data
    },
    SET_ROUND_COUNT(state, data) {
        state.tournament.roundCount = data
    },
    SET_ROUND_LIST(state, data) {
        state.roundList = data
    },
    SET_MATCH_LIST(state, data) {
        state.matchList = data
    }

}