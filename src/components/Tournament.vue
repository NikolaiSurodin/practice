<template>
  <div class="tournament">
    <div class="round"
         v-for="(round, id) in roundList" :key="id">
      <tournament-round :round="round"
                        :matchList="matchList"/>
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
    }
  }
}
</script>

<style scoped>
.tournament {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 20%;
}


</style>