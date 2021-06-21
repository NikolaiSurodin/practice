class TournamentRound {
    id
    name
    group // какая группа играет этот раунд
    type // навылет раудн или нет
    start
    end

    constructor(options = {}) {
        for (let key of Object.keys(this)) {
            this[key] = Object.hasOwnProperty.call(options, key) ? options[key] : null
        }

    }

    //Нужно получать список матчей в турнире
}

export {TournamentRound}