//import {Team} from '../Team/Team'
import {store} from "@/store";

class TournamentRoundMatchParticipant {
    id
    name
    team // может быть как команда, так и одиночный игрок
    score

    // constructor(options = {}) {
    //     this.id = Math.random().toString(36).slice(-6)
    //     this.name = this.getName()
    //     this.score = 0
    //     for (let key of Object.keys(options)) {
    //         let tempData = null
    //
    //         if (Object.hasOwnProperty.call(options, key)) {
    //
    //             switch (key) {
    //                 case 'team':
    //                     tempData = new Team(options[key])
    //                     break
    //                 default:
    //                     tempData = options[key]
    //             }
    //         }
    //         this[key] = tempData
    //     }
    //
    // }
    constructor(name) {
        this.id = Math.random().toString(36).slice(-6)
        this.score = 0
        if (name){
            Object.assign(this, {
                name
            })
        } else {
            store.dispatch('getName')
                .then(name => {
                    Object.assign(this, {name})
                })
                .catch(err => console.log(err))
        }
    }

}

export {TournamentRoundMatchParticipant}