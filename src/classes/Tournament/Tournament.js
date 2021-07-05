import {TournamentRound} from "./TournamentRound";

class Tournament {
    id
    name
    participantsCount
    roundCount
    roundList
    participantList
    roundList
    start
    end
    minParticipantsNumber// минимум для турнира
    prize
    winner
    loser
    scoreForMatch // счет установленный для матчей

    constructor(options = {}) {
        this.id = `f${(+new Date).toString(15)}`
        this.minParticipantsNumber = 2

        for (let key of Object.keys(options)) {
            this.participantsCount = Number(this.participantsCount)
            this.scoreForMatch = Number(this.scoreForMatch)
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