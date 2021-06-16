<template>
  <div id="app">
  </div>
</template>

<script>
import {TournamentRoundMatch} from "./classes/Tournament/TournamentRoundMatch";

export default {
  name: 'App',
  data() {
    return {
      tournamentMatch: {},
      user:{}
    }
  },
  methods: {
    add() {
      let round ={
        id:456,
        name:'round',
        group:'firs',
        type:'olip',
        start:new Date(),
        end:new Date(),
      }
      let tourMa = {
        create_at:'',
        update_at:'',
        delete_at:'',
        id:123,
        name:'alo',
        start:new Date(),
        end:new Date() - 1,
        round:round,
        type:''
      }
      this.tournamentMatch = new TournamentRoundMatch(tourMa)
      console.log(this.tournamentMatch)
    }
  },
  mounted() {
    this.add()

  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
