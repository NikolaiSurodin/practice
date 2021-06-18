
export default {
    SET_TOURNAMENT(state, data){
        state.tournament = data
    },
    SET_PARTICIPANT_COUNT(state, data){
        state.participantsCount = data
    },
    SET_ROUND_COUNT_LIST(state, data) {
        state.roundList = data
    }

}