<template>
  <div>
    <div class="match">
      <b-avatar variant="secondary"></b-avatar>
      {{ match.participantList[0].name }} - {{ match.participantList[1].name }}
      <b-avatar variant="secondary"></b-avatar>

      <p class="text-center">{{ match.participantList[0].score }} - {{ match.participantList[1].score }}</p>
      <p class="text-center">{{ match.date }}</p>

    </div>
  </div>
</template>

<script>

export default {
  name: "TournamentMatch",
  data() {
    return {}
  },
  props: {
    match: {
      type: Object
    }
  },
  computed: {}
}
</script>

<style scoped>
.match {
  display: inline-block;
  background-color: #000032;
  border-radius: 5px;
  height: 7rem;
  max-width: 15rem;
  margin-top: 15px;
  color: #f81d31;
}
</style>