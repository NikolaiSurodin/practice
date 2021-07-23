<template>
  <div class="round-list">
  <span class="roundNumber">ROUND №{{ round.numberRound }}
  <span v-if="round.numberRound === lastRoundNumber">
      <img src="../assets/cup.png" height="24" width="24"/>
    </span>
  </span>
    <ul class="round-list">
      <li class="match-item" v-for="(match, id) in matchListByRoundNumber(round.numberRound)" :key="id">
        <tournament-match
            :match="match"
            :is-last-match="match === matchList[matchList.length - 1]"
        />
      </li>
    </ul>
  </div>


</template>

<script>
import TournamentMatch from "@/components/TournamentMatch";

export default {
  name: "TournamentRound",
  components: {TournamentMatch},
  data() {
    return {}
  },
  props: {
    round: {
      type: Object,
      required: true,
      default: null
    },
    matchList: {
      type: Array,
      required: true,
      default: null
    }
  },
  methods: {
    matchListByRoundNumber(numberRound) {
      return this.matchList.filter(match => match.numberRound === numberRound)
    }
  },
  computed: {
    lastRoundNumber() {
      let roundList = this.$store.getters.getRoundList
      let lastRound = roundList[roundList.length - 1].numberRound
      return lastRound
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@1,700&display=swap');

.roundNumber {
  font-family: 'Noto Serif', serif;
  justify-content: center;
  height: 50px;
  width: 150px;
  margin-left: 20px;
  text-align: center;
  border: solid #000000;
  border-radius: 10px;
  margin-top: 15px;
}


.round-list {
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: center;
  height: 100%;
  min-height: 100%;
}

.match-item {
  display: flex;
  flex: 0 1 auto;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}
</style>