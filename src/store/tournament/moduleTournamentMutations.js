export default {
    SET_TOURNAMENT(state, data) {
        state.tournament = data
        state.tournament.participantsCount = Number(state.tournament.participantsCount)
        localStorage.setItem('tournament', JSON.stringify(state.tournament))
        state.participantsCount = data.participantsCount
    }
}