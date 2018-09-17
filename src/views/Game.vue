<template>
  <div class="game">
      <div class="game--player">
        <div class="game--home">
          <router-link to="/">Go Back</router-link>
        </div>
        <div class="game--player--item">
          <p>Player 1 [X]</p>
          <p class="score">{{ this.score.one }}</p>
        </div>
        <div class="game--player--item">
          <p>Player 2 [O]</p>
          <p class="score">{{ this.score.two }}</p>
        </div>
        <div class="reset" @click="resetBoard">
          <router-link to="/game">Reset</router-link>
        </div>
        <div class="wtf" v-show="this.winner === ''">
          <p @click="wtfMode">W T F</p>
        </div>
      </div>
      <router-view v-on:win="getScore" :mode="mode" :winner="winner"></router-view>
  </div>
</template>

<script>
import Board from '@/components/Board'
export default {
  name: 'home',
  props: {
    mode: String
  },
  components: {
    'Board': Board
  },
  data () {
    return {
      score: {
        one: 0,
        two: 0
      },
      winner: '',
      wtf_state: false
    }
  },
  methods: {
    getScore (winner) {
      if (winner === 'cross') {
        this.score.one++
        this.winner = winner
      }
      if (winner === 'circle') {
        this.score.two++
        this.winner = winner
      }
      this.$router.push('/end')
    },
    resetBoard () {
      const c = document.querySelectorAll('.board li')
      for (let i = 0; i < c.length; i++) {
        c[i].classList = ''
        this.winner = ''
        this.wtf_state = false
      }
    },
    wtfMode () {
      const c = document.querySelectorAll('.board li')
      for (let i = 0; i < c.length; i++) {
        c[i].classList = ''
        if (this.wtf_state === false) {
          c[i].classList.add('wtfmode')
          if (i === c.length-1) {
            this.wtf_state = true
          }
        } else {
          if (i === c.length-1) {
            this.wtf_state = false
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.game {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
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
        width: 100%;
        height: 100%;
      }
    }
    a {
      text-decoration: none;
      color: rgb(80, 220, 140);
    }
  }
  .reset, .wtf {
    width: 150px;
    height: 40px;
    line-height: 40px;
    border-radius: 20%;
    font-size: 1.4em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto 0 auto;
  }
  .reset {
    border: 1px solid rgb(80, 220, 140);
    &:hover {
      background: rgb(80, 220, 140);
      cursor: pointer;
      & a {
        color: #000;
      }
    }
    a {
    color: rgb(80, 220, 140);
    text-align: center;
    text-decoration: none;
    }
  }
  .wtf {
    background: rgb(80, 220, 140);
    text-align: center;
    &:hover {
      background: none;
      border: 1px solid rgb(80, 220, 140);
      cursor: pointer;
      p {
        color: rgb(80, 220, 140);
      }
    }
  }
}
</style>
