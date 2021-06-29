<template>
  <div>
    <div class="container">
      <p class="row roundNumber">ROUND №{{ round.numberRound }}</p>
      <div v-for="(match, id) in matchListByRoundNumber(round.numberRound)" :key="id">
        <tournament-match
            :match="match"
        />
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
  props: {
    round: {
      type: Object
    }
  },
  methods: {
    matchListByRoundNumber(numberRound) {
      return this.getMatchList.filter(match => match.numberRound === numberRound)
    }
  },
  computed: {
    ...mapGetters([
      'getMatchList'
    ])
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@1,700&display=swap');

.roundNumber {
  font-family: 'Noto Serif', serif;
  justify-content: center;
  border: solid #000000;
  height: 50px;
  border-radius: 10px;
}

</style>