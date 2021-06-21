class TournamentRoundMatch {
    id
    name
    participantList

    constructor(...participantList) {
        this.participantList = [...participantList]
    }
}

export {TournamentRoundMatch}