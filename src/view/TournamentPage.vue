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
            placeholder="Количесво очков за матч"
            type="number"
            v-model="tournament.scoreForMatch"
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
    </div>
    <div v-if="getParticipantCount">
      <template>
        <tournament-table :score-for-match="tournament.scoreForMatch"
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
        winner: '',
        loser: '',
        scoreForMatch: this.scoreForMatch
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
    }
  },
  computed: {
    ...mapGetters([
      'getParticipantCount'
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