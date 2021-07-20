import {store} from '@/store'
import {TournamentRoundMatchParticipant} from "@/classes/Tournament/TournamentRoundMatchParticipant";

class TournamentRoundMatch {
    id
    date
    numberRound
    numberMatch
    participantList
    expired // дата игры не наступила
    score
    matchWinner
    completed

    constructor(numberRound, numberMatch) {
        this.participantList = numberRound === 1 ? [new TournamentRoundMatchParticipant(), new TournamentRoundMatchParticipant()] : [new TournamentRoundMatchParticipant('Player'), new TournamentRoundMatchParticipant('Player')]
        this.numberRound = numberRound
        this.numberMatch = numberMatch
        let currentYear = new Date().getFullYear()
        let month = Math.floor(Math.random() * 11)
        let number = Math.floor(Math.random() * 31)
        this.date = new Date(currentYear, month, number).toISOString().substring(0, 10)
        this.expired = this.date < new Date().toISOString().substring(0, 10)
        this.score = 0
        this.id = Math.random().toString(36).slice(-6)
        this.completed = false

    }

    isFinished() {
        let tournament = store.getters.getTournament
        this.score = tournament.numberOfGames
        return this.score === this.participantList[0].score + this.participantList[1].score
    }
}

export {TournamentRoundMatch}