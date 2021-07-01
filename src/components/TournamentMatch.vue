<template>
  <div class="match"
       :class="{finishedMatch:match.isFinished}"
  >
    <b-avatar variant="secondary"></b-avatar>

    <span>{{ match.participantList[0].name }} - {{ match.participantList[1].name }}</span>

    <b-avatar variant="secondary"></b-avatar>

    <p class="text-center" v-if="!match.isFinished">
      {{ match.participantList[0].score }} - {{ match.participantList[1].score }}
    </p>

    <p class="text-center">{{ match.date }}</p>

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
  }
}
</script>

<style scoped>
.match {
  background-color: #000032;
  border-radius: 5px;
  height: 7rem;
  max-width: 15rem;
  margin-top: 15px;
  color: #f81d31;
  list-style-type: none;
}

.match::before {

}

.match:after {


}

.finishedMatch {
  background-color: #333379;
  color: #e78a93;
}

</style>