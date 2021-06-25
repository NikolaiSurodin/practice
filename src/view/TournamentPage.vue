<template>
  <div class="form">
    <div class="container">
      <p class="text-center">Параметры турнира</p>
      <div class="input-group-sm">
        <b-form-input  placeholder="количество участников" type="number" v-model="tournament.participantsCount" />
        <b-form-input placeholder="Название" type="text" v-model="tournament.name" />
      </div>
      <b-button variant="success" class="mt-3" type="button" :disabled="!tournament.participantsCount" @click="addTournament()">
        Создать
      </b-button>
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
import {Tournament} from "@/classes/Tournament/Tournament";
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
          .catch(() =>{
            alert('Неверное число участников!')
            this.tournament.participantsCount = ''
          })
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

  color: #2c3e50;
  margin-top: 30px;
}
.container{
  max-width: 250px;
}

</style>