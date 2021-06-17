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

        for (let key of Object.keys(this)) {
            this.id = `f${(+new Date).toString(15)}`
            this.minParticipantsNumber = 2
            this[key] = Object.hasOwnProperty.call(options, key) ? options[key] : null
        }
    }

}

export {Tournament}