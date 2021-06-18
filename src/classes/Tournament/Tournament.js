import {TournamentRound} from "./TournamentRound";

class Tournament {
    id
    name
    participantsCount
    roundCount
    round
    participants
    start
    end
    minParticipantsNumber = 2// минимум для турнира
    prize
    winner
    loser

    constructor(options = {}) {
        this.id = `f${(+new Date).toString(15)}`
        for (let key of Object.keys(options)) {
            this.participantsCount = Number(this.participantsCount)
            let tempData = null
            if (Object.hasOwnProperty.call(options, key)) {
                switch (key) {
                    case 'round':
                        tempData = new TournamentRound(options[key])
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