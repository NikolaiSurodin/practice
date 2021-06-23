<template>
  <div class="form">
    <div>
      <p>Параметры турнира</p>
      <div class="input-group">
        <input placeholder="количество участников" type="number" v-model="tournament.participantsCount">
        <input placeholder="Название" type="text" v-model="tournament.name">
      </div>
      <button class="addButton" type="button" :disabled="!tournament.participantsCount" @click="addTournament()">
        Создать
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import {Tournament} from "../classes/Tournament/Tournament";
import TournamentTable from "./TournamentTable";


export default {
  name: "TournamentPage",
  data() {
    return {
      count: null,
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
          })
          .catch((err) => console.log(err))
    }

  },
  computed: {
    ...mapGetters([
      'getTournament',
      'getRoundList'
    ])
  }

}
</script>
<style scoped>

</style>