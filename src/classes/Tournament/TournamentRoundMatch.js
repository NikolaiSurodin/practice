import {TournamentRound} from "./TournamentRound";

class TournamentRoundMatch {

    create_at
    update_at
    delete_at
    id
    name
    start
    end
    round
    type // выбывание ли нет

    constructor(options = {}) {
        for (let key of Object.keys(options)) {
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

export {TournamentRoundMatch}