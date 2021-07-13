export default {
    createNameList({commit, getters}) {
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
        let indexNameList = []
        let usedName = []
        let participantCount = getters.getParticipantCount
        for (let i = 0; i < participantCount; i++) {
            let index = Math.floor(Math.random() * nameList.length)
            let name = nameList[index]
            let nameIndex = nameList.indexOf(name)
            if (!indexNameList.includes(nameIndex)){
                indexNameList.push(nameIndex)
                usedName.push(nameList[nameIndex])
            }
        }
        commit('SET_USED_NAME', usedName)
        commit('SET_INDEX_LIST', indexNameList)

    },
    // getName({commit, getters}) {
    //
    // }
}