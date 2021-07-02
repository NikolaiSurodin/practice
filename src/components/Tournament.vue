<template>
  <div class="container">
    <div class="row"
         v-for="(round, id) in roundList" :key="id">
      <tournament-round :round="round"
                        :match-list="matchList"
                        :match-score="matchScore"
      />
    </div>
  </div>
</template>

<script>
import TournamentRound from "@/components/TournamentRound";

export default {
  name: "Tournament",
  components: {TournamentRound},
  data() {
    return {}
  },
  props: {
    roundList: {
      type: Array,
      default: null,
      required: true
    },
    matchList: {
      type: Array,
      default: null,
      required: true
    },
    matchScore:{
      type:Number
    }
  }
}
</script>

<style scoped>

</style>