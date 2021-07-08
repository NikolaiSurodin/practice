export default {
    createName({commit}) {
        let nameList = [
            "Harry", "Ross",
            "Bruce", "Cook",
            "Carolyn", "Morgan",
            "Albert", "Walker",
            "Randy", "Reed",
            "Larry", "Barnes",
            "Lois", "Wilson",
            "Jesse", "Campbell",
            "Ernest", "Rogers",
            "Theresa", "Patterson",
            "Henry", "Simmons",
            "Michelle", "Perry",
            "Frank", "Butler",
            "Shirley"
        ]
        commit('SET_PARTICIPANT_NAME', nameList)
    }
}