class TournamentRoundMatch {
    id
    name
    time
    participantList

    constructor(...participantList) {
        this.participantList = [...participantList]

    }
}

export {TournamentRoundMatch}