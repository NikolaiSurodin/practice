class TournamentRound {
    id
    name
    numberRound // номер раунда
    matchList
    start
    end

    constructor(numberRound, ...matchList) {
        this.numberRound = numberRound
        this.matchList = [...matchList]
    }
}

export {TournamentRound}