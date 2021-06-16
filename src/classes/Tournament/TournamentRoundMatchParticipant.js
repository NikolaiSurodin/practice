import {Team} from '../Team/Team'

class TournamentRoundMatchParticipant {

    id
    name
    team // может быть как команда, так и одиночный игрок


    constructor(options = {}) {
        for (let key of Object.keys(options)) {
            let tempData = null
            if (Object.hasOwnProperty.call(options, key)) {
                switch (key) {
                    case 'team':
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

export {TournamentRoundMatchParticipant}