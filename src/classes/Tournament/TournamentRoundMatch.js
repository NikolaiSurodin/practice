class TournamentRoundMatch {
    id
    name
    date
    numberRound
    numberMatch
    participantList
    isFinished

    constructor(date, numberRound, numberMatch, ...participantList) {
        this.participantList = [...participantList]
        this.numberRound = numberRound
        this.numberMatch = numberMatch
        this.date = date
        this.isFinished = date < new Date().toISOString().substring(0,10)
    }
}

export {TournamentRoundMatch}