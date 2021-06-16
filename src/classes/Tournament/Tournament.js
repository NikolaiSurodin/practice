class Tournament {
    id
    name
    create_at
    update_at
    delete_at
    start
    end
    min_team_size
    max_team_size
    prize
    winner
    loser

    constructor(options = {}) {
        for (let key of Object.keys(this)) {
            this[key] = Object.hasOwnProperty.call(options, key) ? options[key] : null
        }
    }
}

export {Tournament}