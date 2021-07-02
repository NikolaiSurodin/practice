class TournamentRoundMatch {
    id
    name
    date
    numberRound
    numberMatch
    participantList
    completed
    score

    constructor(date, numberRound, numberMatch, ...participantList) {
        this.participantList = [...participantList]
        this.numberRound = numberRound
        this.numberMatch = numberMatch
        this.date = date
        this.completed = date < new Date().toISOString().substring(0, 10)
        this.score = 0
    }
}

export {TournamentRoundMatch}