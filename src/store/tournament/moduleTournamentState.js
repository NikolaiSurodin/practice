export default {
    tournament: JSON.parse(localStorage.getItem('tournament')) || {},
    machList: {},
    roundList: {},
    participantsList:[],
    participantsCount: null
}