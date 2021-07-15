export default {
    getName({commit, getters}) {
        return new Promise((resolve, reject) => {
            //let participantCount = getters.getParticipantCount
            let usedNameIndexList = getters.getUsedNameIndexList
            let nameList = getters.getNameList
            let randomNameListIndex = Math.floor(Math.random() * nameList.length)
            let name = nameList[randomNameListIndex]
            let nameIndex = nameList.indexOf(name)

            if (nameList.length <= usedNameIndexList.length) {
               console.log('Свободных имен нет')
            } else {
                while (usedNameIndexList.includes(nameIndex)) {
                    if (usedNameIndexList.length > 0 || usedNameIndexList.includes(nameIndex)) {
                        randomNameListIndex = Math.floor(Math.random() * nameList.length)
                        name = nameList[randomNameListIndex]
                        nameIndex = nameList.indexOf(name)
                    } else {
                        break
                    }
                }
                commit('ADD_USED_NAME_INDEX', nameIndex)
                resolve(name)
            }
            reject(err => console.log(err))
        })
    }
}