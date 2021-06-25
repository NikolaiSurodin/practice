<template>
  <div class="container">
    <div class="row" v-for="(round, id) in getRoundList" :key="id">
      <p>Round № {{ round.numberRound }}</p>
      <div class="row roundList" v-for="(match, id) in matchListByRound(round.numberRound)" :key="id">
        <div class="row alo">
          <tournament-match>
            {{ match.participantList[0].name }} - {{ match.participantList[1].name }}
          </tournament-match>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TournamentMatch from "@/components/TournamentMatch";
import {mapGetters} from 'vuex'

export default {
  name: "TournamentRound",
  components: {TournamentMatch},
  data() {
    return {}
  },
  methods: {
    matchListByRound(numberRound) {
      return this.getMatchList.filter(match => match.numberRound === numberRound)
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
.alo{
  display: flex;

  justify-items: flex-start;
}
.roundList{

  display: flex;
}
</style>