class TournamentRoundMatch {
    id
    name
    date
    numberRound
    numberMatch
    participantList

    constructor(date, numberRound, numberMatch, ...participantList) {
        this.participantList = [...participantList]
        this.numberRound = numberRound
        this.numberMatch = numberMatch
        this.date = date
    }
}

export {TournamentRoundMatch}