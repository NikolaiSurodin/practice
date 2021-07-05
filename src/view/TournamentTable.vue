<template>
  <div class="table">
    <tournament
        :match-list="getMatchList"
        :round-list="getRoundList"
    />
  </div>
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
  props: {

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
.container {
  display: -webkit-box;

}

.table {
  margin-top: 15px;
}

</style>