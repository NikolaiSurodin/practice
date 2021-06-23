import {TournamentRoundMatch} from "./TournamentRoundMatch";

class TournamentRound {
    id
    name
    number
    matchList = [] // какие команды играют в этом раунде
    group // какая группа играет этот раунд
    type // навылет раудн или нет
    start
    end

    constructor(options = {}) {
        for (let key of Object.keys(options)) {
            this.participantsCount = Number(this.participantsCount)
            let tempData = null
            if (Object.hasOwnProperty.call(options, key)) {
                switch (key) {
                    case 'matchList':
                        tempData = [...new TournamentRoundMatch(options[key])]
                        break
                    default:
                        tempData = options[key]
                }
            }
            this[key] = tempData
        }
    }

    //Нужно получать список матчей в турнире
}

export {TournamentRound}