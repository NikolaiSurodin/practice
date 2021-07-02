<template>
  <div class="match"
       :class="{completedMatch:match.completed || isCompleted}"
  >
    <img @click="addPoint()"
         class="avatar" src="../assets/avatar.jpg"
    />

    <span>{{ match.participantList[0].name }} - {{ match.participantList[1].name }}</span>

    <img @click="addPoint()"
         class="avatar" src="../assets/avatar.jpg"
    />

    <p class="text-center" v-if="!match.completed">
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
    },
    matchScore: {

    }
  },
  methods: {
    addPoint(){

    }

  },
  computed: {
    isCompleted() {
      return this.matchScore === this.match.participantList[0].score + this.match.participantList[1].score
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

.avatar {
  border-radius: 50%;
  height: 40px;
  width: 40px;
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  -o-transition: transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s
}

.avatar:hover {
  -webkit-transform: scale(1.5, 1.5);
  -ms-transform: scale(1.5, 1.5);
  transform: scale(1.5, 1.5);
  cursor: pointer;
}

.completedMatch {
  background-color: #d2fcea;
  color: #e78a93;
  border: solid 1px green;
}

</style>