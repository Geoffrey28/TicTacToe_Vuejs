<template>
  <div class="game">
      <div class="game--player">
        <div class="game--home">
          <router-link to="/">Go Back</router-link>
        </div>
        <div class="game--player--item">
          <p>Player 1</p>
          <p class="score">{{ this.score.one }}</p>
        </div>
        <div class="game--player--item">
          <p>Player 2</p>
          <p class="score">{{ this.score.two }}</p>
        </div>
        <div class="reset" v-show="this.win">
          <router-link to="/game">Reset</router-link>
        </div>
      </div>
      <router-view v-on:win="getScore"></router-view>
  </div>
</template>

<script>
import Board from '@/components/Board'
export default {
  name: 'home',
  components: {
    'Board': Board
  },
  data () {
    return {
      score: {
        one: 0,
        two: 0
      },
      win: false,
      winner: ''
    }
  },
  methods: {
    getScore (winner) {
      if (winner == 'cross') {
        this.score.one++
        this.winner = winner
      }
      if (winner == 'circle') {
        this.score.two++
        this.winner = winner
      }
      this.$router.push('/end')
      this.win = true
    }
  }
}
</script>

<style lang="scss" scoped>
// $color1: #333;
// $color3: #666;
// $color2: #999;

.game {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &--player {
    margin-right: 250px;
    &--item {
      color: rgb(80, 220, 140);
      font-size: 1.5em;
      p {
        text-align: center;
      }
    }
  }
  &--home {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -20vh 10vw 20vh 0;
    &:hover {
      a {
        text-shadow: 2px 2px 5px rgb(80, 220, 140);
      }
    }
    a {
      text-decoration: none;
      color: rgb(80, 220, 140);
    }
  }
  .reset {
    margin: 10vh auto 0;
    width: 150px;
    height: 40px;
    border: 1px solid rgb(80, 220, 140);
    font-size: 1.4em;
    border-radius: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background: rgb(80, 220, 140);
      & a {
        color: #000;
      }
    }
    a {
    color: rgb(80, 220, 140);
    text-decoration: none;
    }
  }
}
</style>
