<template>
  <div class="game">
    <Actions v-on:reset="resetBoard" v-on:wtf="wtfMode" :mode="mode" :score="score" :winner="winner"></Actions>
    <router-view v-on:win="getScore" :mode="mode" :winner="winner"></router-view>
  </div>
</template>

<script>
import Board from '@/components/Board'
import Actions from '@/components/Actions'
export default {
  name: 'home',
  props: {
    mode: String
  },
  components: {
    'Board': Board,
    'Actions': Actions
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
          if (i === c.length - 1) {
            this.wtf_state = true
          }
        } else {
          if (i === c.length - 1) {
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
}
</style>
