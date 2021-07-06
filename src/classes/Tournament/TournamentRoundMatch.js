import {store} from '@/store'

class TournamentRoundMatch {
    id
    name
    date
    numberRound
    numberMatch
    participantList
    expired // дата игры не наступила
    score

    constructor(date, numberRound, numberMatch, ...participantList) {
        this.participantList = [...participantList]
        this.numberRound = numberRound
        this.numberMatch = numberMatch
        this.date = date
        this.expired = date < new Date().toISOString().substring(0, 10)
        this.score = 0

    }

    isCompleted() {
        let tournament = store.getters.getTournament
        this.score = tournament.numberOfGames
        return this.score === this.participantList[0].score + this.participantList[1].score
    }

    winner() {
        let participantList = this.participantList.map(el => {
            return {
                name: el.name,
                score: el.score
            }
        })
        participantList.sort((a, b) => b.score - a.score)
        return participantList[0]

    }
}

export {TournamentRoundMatch}