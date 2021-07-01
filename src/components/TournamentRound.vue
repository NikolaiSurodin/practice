<template>
  <div>
    <p class="roundNumber">ROUND №{{ round.numberRound }}</p>

    <ul class="match" v-for="(match, id) in matchListByRoundNumber(round.numberRound)" :key="id">
      <li>
        <tournament-match
            :match="match"
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
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@1,700&display=swap');

.roundNumber {
  font-family: 'Noto Serif', serif;
  justify-content: center;
  height: 50px;
  margin-left: 20px;
  text-align: center;
  border: solid #000000;
  border-radius: 10px;
}

.match {
  list-style-type: none;
}


</style>