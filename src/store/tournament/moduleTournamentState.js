export default {
    tournament: JSON.parse(localStorage.getItem('tournament')) || {},
    matchList: [],
    roundList: null,
    participantsList:[],
    participantsCount: null
}