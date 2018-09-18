<template>
    <ul class="board" @click="drawMarker() + checkCombo()">
        <li></li>
        <li></li>
        <li></li>

        <li></li>
        <li></li>
        <li></li>

        <li></li>
        <li></li>
        <li></li>
    </ul>
</template>

<script>
export default {
  name: 'Board',
  props: {
    mode: String
  },
  data () {
    return {
      turn: 1,
      winner: null
    }
  },
  mounted () {
    if (this.mode === 'solo') {
      this.autoPlay()
    }
  },
  methods: {
    drawMarker (state) {
      console.log(this.mode)
      if (window.event.target.innerHTML === '') {
        if (this.turn % 2 !== 0) {
          window.event.target.innerHTML = '<p>X</p>'
          window.event.target.classList.add('cross')
        } else {
          window.event.target.innerHTML = '<p>O</p>'
          window.event.target.classList.add('circle')
          if (this.mode === 'solo') {
            this.autoPlay()
          }
        }
        this.turn++
      }
    },
    autoPlay () {
      window.setTimeout(() => {
        const c = document.querySelectorAll('.board li')
        let tgt = c[Math.floor(Math.random() * c.length)]
        while (tgt.innerHTML !== '') {
          tgt = c[Math.floor(Math.random() * c.length)]
        }
        tgt.innerHTML = '<p>O</p>'
        tgt.classList.add('circle')
        this.turn++
      }, 1000)
    },
    checkCombo () {
      const c = document.querySelectorAll('li')
      if ((c[0].className === c[1].className && c[1].className === c[2].className && c[0].classList.length === 1) ||
            (c[3].className === c[4].className && c[4].className === c[5].className && c[3].classList.length === 1) ||
            (c[6].className === c[7].className && c[7].className === c[8].className && c[6].classList.length === 1)) {
        this.winner = window.event.target.className
        this.getWin()
      }
      if ((c[0].className === c[3].className && c[3].className === c[6].className && c[0].classList.length === 1) ||
            (c[1].className === c[4].className && c[4].className === c[7].className && c[1].classList.length === 1) ||
            (c[2].className === c[5].className && c[5].className === c[8].className && c[2].classList.length === 1)) {
        this.winner = window.event.target.className
        this.getWin()
      }
      if ((c[0].className === c[4].className && c[4].className === c[8].className && c[0].classList.length === 1) ||
            (c[2].className === c[4].className && c[4].className === c[6].className && c[2].classList.length === 1)) {
        this.winner = window.event.target.className
        this.getWin()
      }
    },
    getWin () {
      window.setTimeout(() => {
        if (this.winner !== null) {
          this.$emit('win', this.winner)
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.board {
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    animation: ca 3s cubic-bezier(.61,1.17,.82,.95);
    & li {
        width: 33.3%;
        height: 33.3%;
        border-top: 1px solid rgb(80, 220, 140);
        border-left: 1px solid rgb(80, 220, 140);
        list-style: none;
        &:hover {
            background: rgba(80, 220, 140, .2);
            cursor: pointer;
        }
    }
    & li:nth-child(1), li:nth-child(7), li:nth-child(4) {
        border-left: none;
    }
    & li:nth-child(1), li:nth-child(2), li:nth-child(3) {
        border-top: none;
    }
    .cross, .circle {
        text-align: center;
        font-size: 3em;
        font-weight: 300;
        color: rgb(80, 220, 140);
        animation: ta 500ms cubic-bezier(.61,1.17,.82,.95);
    }
    .wtfmode {
      width: 26%;
      height: 26%;
      border: none;
      background: rgb(80, 220, 140);
      animation: wtf_anim 3s alternate infinite
    }
}

@keyframes ca {
  0% {
      height: 0;
      width: 0;
      opacity: 0
  }
}

@keyframes ta {
  0% {
      opacity: 0;
      font-size: 0;
  }
}

@keyframes wtf_anim {
  0% {
    border-radius: 0 0 0 0;
    background: rgba(80, 220, 140, 1);
    transform: rotate(0deg)
  }
  25% {
    border-radius: 50% 0 0 0;
    background: rgba(80, 220, 140, .7);
    transform: rotate(90deg)
  }
  50% {
    border-radius: 50% 50% 0 0;
    background: rgba(80, 220, 140, .4);
    transform: rotate(180deg)
  }
  75% {
    border-radius: 50% 50% 50% 0;
    background: rgba(80, 220, 140, .7);
    transform: rotate(270deg)
  }
  100% {
    border-radius: 50%;
    background: rgba(80, 220, 140, 1);
    transform: rotate(360deg)
  }
}
</style>
