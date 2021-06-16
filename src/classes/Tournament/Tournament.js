import {Team} from "../Team/Team";

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
        for (let key of Object.keys(options)) {
            let tempData = null
            this.id = `f${(+new Date).toString(16)}`
            if (Object.hasOwnProperty.call(options, key)) {
                switch (key) {
                    case 'participants':
                        tempData = new Team(options[key])
                        break
                    default:
                        tempData = options[key]
                }
            }
            this[key] = tempData
        }
    }
}
export {Tournament}