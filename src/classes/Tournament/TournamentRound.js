class TournamentRound {
    id
    name
    group
    type
    start
    end
    create_at
    update_at
    delete_at


    constructor(options = {}) {
        for (let key of Object.keys(this)){
            this[key] = Object.hasOwnProperty.call(options, key) ? options[key] : null
        }
    }
    //Нужно получать список матчей в турнире
}
export {TournamentRound}