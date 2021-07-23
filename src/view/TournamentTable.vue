<template>
    <tournament
        :match-list="getMatchList"
        :round-list="getRoundList"
    />

</template>

<script>
import Tournament from "@/components/Tournament";
import {mapGetters} from "vuex";

export default {
  name: "TournamentTable",
  components: {Tournament},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'getRoundList',
      'getMatchList',
      'getTournament'
    ])
  }
}
</script>

<style scoped>

</style>