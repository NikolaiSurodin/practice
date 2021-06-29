<template>
  <div class="container">
    <div class="row"
         v-for="(round, id) in getRoundList" :key="id">
      <tournament-round :round="round"/>
    </div>
  </div>
</template>

<script>
import TournamentRound from "@/components/TournamentRound";
import {mapGetters} from "vuex"

export default {
  name: "Tournament",
  components: {TournamentRound},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'getRoundList'
    ])
  }
}
</script>

<style scoped>

</style>