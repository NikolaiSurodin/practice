<template>
  <div class="form">
    <div class="container">
      <p class="text-center">Параметры турнира</p>
      <div class="input-group-sm">
        <b-form-input
            placeholder="количество участников"
            type="number"
            autofocus
            required
            @keydown.enter="addTournament"
            v-model="tournament.participantsCount"/>
        <b-form-input
            placeholder="Количество очков за матч"
            type="number"
            v-model="tournament.numberOfGames"
        />
      </div>
      <b-button
          variant="success"
          class="mt-3"
          type="button"
          :disabled="!valid"
          @click="addTournament">
        Создать
      </b-button>
      <b-button
          variant="success"
          class="mt-3"
          type="button"
          @click="add">
        ADD
      </b-button>
    </div>
    <div v-if="getParticipantCount">
      <template>
        <tournament-table
        />
      </template>
    </div>
    <template>
      <popup-error v-if="error"
                   @closePopup="closePopup"
      />
    </template>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import {Tournament} from "@/classes/Tournament/Tournament";
import TournamentTable from "@/view/TournamentTable";
import PopupError from "@/components/PopupError";

export default {
  name: "TournamentPage",
  components: {PopupError, TournamentTable},
  data() {
    return {
      count: null,
      error: false,
      tournament: new Tournament({
        name: '',
        participantsCount: this.participantsCount,
        roundList: [],
        participantsList: [],
        start: new Date(),
        end: new Date(),
        minParticipantsNumber: '',
        prize: '',
        winner: this.winner,
        numberOfGames: this.numberOfGames
      })
    }
  },
  methods: {
    ...mapActions([
      'createTournament'
    ]),
    addTournament() {
      this.createTournament(this.tournament)
          .then(() => {
            this.tournament.participantsCount = ''
          })
          .catch(() => {
            this.error = true
          })
    },
    closePopup() {
      this.error = false
    },
    add() {
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
      let nameIndexList = []
      let index = Math.floor(Math.random() * nameList.length)
      let name = nameList[index]
      let nameIndex = nameList.indexOf(name)
      //console.log(name)
      nameIndexList.push(nameIndex)
      console.log(nameIndexList)


    }
  },
  computed: {
    ...mapGetters([
      'getParticipantCount',
      'getTournament'
    ]),
    valid() {
      return this.tournament.participantsCount
    }
  }

}
</script>
<style scoped>
.form {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}

.container {
  max-width: 250px;
}

</style>