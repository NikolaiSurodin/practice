class TournamentRoundMatch {
    id
    name
    time
    numberRound
    numberMatch
    participantList

    constructor(numberRound, numberMatch, time, ...participantList) {
        this.participantList = [...participantList]
        this.numberRound = numberRound
        this.numberMatch = numberMatch
        this.time = time

    }
}

export {TournamentRoundMatch}