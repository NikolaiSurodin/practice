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
    <div v-if="getParticipantCount">
      <template>
        <tournament-table/>
      </template>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import {Tournament} from "../classes/Tournament/Tournament";
import TournamentTable from "@/view/TournamentTable";

export default {
  name: "TournamentPage",
  components: {TournamentTable},
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
            this.tournament.participantsCount = ''
          })
          .catch((err) => console.log(err))
    }

  },
  computed: {
    ...mapGetters([
      'getTournament',
      'getRoundList',
      'getMatchList',
      'getParticipantCount'
    ])
  }

}
</script>
<style scoped>
.form {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.addButton {
  cursor: pointer;
  margin-top: 15px;
}

</style>