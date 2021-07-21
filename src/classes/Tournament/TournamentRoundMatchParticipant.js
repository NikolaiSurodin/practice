import {store} from "@/store";

class TournamentRoundMatchParticipant {
    id
    name
    team // может быть как команда, так и одиночный игрок
    score

    constructor(name) {
        this.id = Math.random().toString(36).slice(-6)
        this.score = 0
        if (name) {
            this.name = name
        } else {
            store.dispatch('getName')
                .then(name => this.name = name)
                .catch(err => console.log(err))
        }
    }

}

export {TournamentRoundMatchParticipant}