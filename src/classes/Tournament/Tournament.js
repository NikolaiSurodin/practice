
class Tournament {
    id
    name
    participantsCount
    participants
    start
    end
    minParticipantsNumber// минимум для турнира
    prize
    winner
    loser

    constructor(options = {}) {
        this.id = `${(+new Date).toString(15)}`
        for (let key of Object.keys(this)) {
            this[key] = Object.hasOwnProperty.call(options, key) ? options[key] : null
        }
    }
}
export {Tournament}