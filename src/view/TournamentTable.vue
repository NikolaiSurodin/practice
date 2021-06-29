<template>
  <div class="table">
      <tournament/>
  </div>
</template>

<script>
import Tournament from "@/components/Tournament";

export default {
  name: "TournamentTable",
  components: {Tournament},
  data() {
    return {}
  }
}
</script>

<style scoped>
.container {
  display: -webkit-box;

}
.table{
  background-color: #eceaea;
}

</style>