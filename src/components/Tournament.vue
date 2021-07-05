<template>
  <div class="container">
    <div class="row"
         v-for="(round, id) in roundList" :key="id">
      <tournament-round :round="round"
                        :match-list="matchList"
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
    }
  }
}
</script>

<style scoped>

</style>