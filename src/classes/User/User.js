import {Profile} from "./Profile";

class User {
    username
    birthday
    email
    password
    id
    profile


    constructor(options = {}) {
        for (let key of Object.keys(options)){
            let tempData = null
            if (Object.hasOwnProperty.call(options, key)) {
                switch (key) {
                    case 'profile':
                        tempData = new Profile (options[key])
                        break
                    default:
                        tempData = options[key]
                }
            }
            this[key] = tempData
        }
    }
}
export {User}
