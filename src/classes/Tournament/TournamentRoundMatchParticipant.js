import {Team} from '../Team/Team'

class TournamentRoundMatchParticipant {
    id
    name
    team // может быть как команда, так и одиночный игрок

    constructor(options = {}) {
        let name = '';
        let possible = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < 5; i++) {
            name += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        for (let key of Object.keys(options)) {
            let tempData = null
            this.name = name
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