<template>
  <div class="wrapper-match"
       :class="{
         expiredMatch:match.expired,
         completedMatch: match.isFinished(),
         match_completed:match.completed,
         lastMatch:isLastMatch,
         twoMatchLine:match.numberMatch % 2 === 0,
         firstRoundMatch: match.participantList[0].name !== 'Player' && match.participantList[1].name !== 'Player'
          }">
    <div class="container-players">
        <span>
          <img @click="addPoint(0)"
               class="avatar" src="../assets/avatar.jpg"/>
        </span>

      <span>{{ match.participantList[0].name }}</span>

      <p> - </p>


      <span>{{ match.participantList[1].name }}</span>

      <span>
          <img @click="addPoint(1)"
               class="avatar" src="../assets/avatar.jpg"/>
        </span>

    </div>

    <div class="match-score" v-if="match.expired">
      {{ match.participantList[0].score }} - {{ match.participantList[1].score }}
    </div>
    <div class="match-score" v-else>
      {{ match.date }}
    </div>
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
p {
  margin: 0;
}

.wrapper-match {
  background-color: #0b0b3e;
  border-radius: 5px;
  height: 6rem;
  width: 16rem;
  margin-top: 15px;
  color: #f69ea5;
  list-style-type: none;
  padding: 15px 15px;
  align-items: center;
}

.container-players {
  display: flex;
  max-width: 500px;
  font-size: 16px;
  font-family: 'PT Sans', 'sans-serif';
  padding: 0 15px;
  align-items: center;
  justify-content: space-between;
}

.match-score {
  justify-content: center;
  display: flex;
}

.wrapper-match.match_completed:after {
  border-color: #00ff05;
  border-width: 2px;
  position: absolute;
  display: block;
  width: 10px;
  right: -11px;
}

.wrapper-match::before {
  content: "";
  border-top: 2px solid #00195f;
  position: absolute;
  width: 1.3em;
  left: -1.2em;
  top: 50%;
}

.wrapper-match:after {
  content: '';
  border-color: #00195f;
  border-width: 2px;
  position: absolute;
  display: block;
  width: 10px;
  right: -11px;
}

.wrapper-match:after {
  border-right-style: solid;
  border-bottom-style: solid;
  top: 50%;
}

.twoMatchLine:after {
  content: '';
  border-bottom-style: solid;
  height: 100%;
  top: -50%;
}

.expiredMatch {
  background-color: #000032;
  color: #f81d31;
  border: solid 1px #880505;

}

.completedMatch {
  background-color: #afc2f1;
  color: #ffffff;
  border: solid 1px #9fb3f8;
}

.wrapper-match.lastMatch {
  background-color: #fffa00;
  color: #f81d31;
  border: solid 1px #880505;
}

.lastMatch::after {
  display: none;
}

.firstRoundMatch:before {
  display: none;
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

</style>