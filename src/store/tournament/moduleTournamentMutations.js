export default {
    SET_TOURNAMENT(state, data) {
        state.tournament = data
        localStorage.setItem('tournament', JSON.stringify(state.tournament))
        state.participantsCount = data.participantsCount

    }
}