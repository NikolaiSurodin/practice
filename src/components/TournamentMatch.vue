<template>
  <div class="match"
       :class="{expiredMatch:match.expired, completedMatch: match.isFinished(), lastMatch:isLastMatch }"
  >
    <img @click="addPoint(0)"
         class="avatar" src="../assets/avatar.jpg"
    />

    <span>{{ match.participantList[0].name }} - {{ match.participantList[1].name }}</span>

    <img @click="addPoint(1)"
         class="avatar" src="../assets/avatar.jpg"
    />

    <div class="text-center" v-if="match.expired">
      {{ match.participantList[0].score }} - {{ match.participantList[1].score }}

    </div>

    <p class="text-center" v-else>{{ match.date }}</p>


  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "TournamentMatch",
  data() {
    return {}
  },
  props: {
    match: {
      type: Object
    },
    isLastMatch: {
      type: Boolean
    }
  },
  methods: {
    ...mapActions([
      'addPointForParticipant',
      'createTournamentWinner'
    ]),
    addPoint(i) {
      if (!this.match.isFinished() && this.match.expired) {
        this.addPointForParticipant({
          participant: this.match.participantList[i],
          participantList: this.match.participantList,
          match: this.match
        })
        if (this.isLastMatch) {
          this.createTournamentWinner()
        }
      }
    }
  }
}
</script>

<style scoped>
.match {
  background-color: #0b0b3e;
  border-radius: 5px;
  height: 6rem;
  width: 14rem;
  margin-top: 15px;
  color: #f69ea5;
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
  -webkit-transform: scale(1.3, 1.3);
  -ms-transform: scale(1.3, 1.3);
  transform: scale(1.3, 1.3);
  cursor: pointer;
}

.expiredMatch {
  background-color: #000032;
  color: #f81d31;
  border: solid 1px #880505;

}

.completedMatch {
  background-color: #afc2f1;
  color: #ff0016;
  border: solid 1px #9fb3f8;
}

.lastMatch {
  background-color: #fffa00;
  color: #f81d31;
  border: solid 1px #880505;
}

</style>