class Team {
    id
    name
    max_number
    min_number
    games // в какой игре задействована

    constructor(options = {}) {
        for (let key of Object.keys(this)) {
            this[key] = Object.hasOwnProperty.call(options, key) ? options[key] : null
        }

    }
}

export {Team}