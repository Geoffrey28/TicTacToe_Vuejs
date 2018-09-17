<template>
  <div class="home">
    <header class="home--head">
      <h1>Tic.Tac.Toe</h1>
    </header>
    <div class="menu">
        <div class="menu--button">
            <router-link to="/Game" @click.native="setMode('solo')">Solo</router-link>
        </div>
        <div class="menu--button">
            <router-link to="/game" @click.native="setMode('multi')">1 vs 1</router-link>
        </div>
    </div>
  </div>
</template>

<script>
// import Menu from '@/components/Menu'
export default {
  name: 'Home',
  // components: {
  //   'Menu': Menu
  // },
  data () {
    return {
      mode: null
    }
  },
  methods: {
    setMode (mode) {
      this.mode = mode
    }
  },
  beforeDestroy () {
    this.$emit('setMode', this.mode)
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 10;
  &--head {
    width: 100%;
    text-align: center;
    color: rgb(80, 220, 140);
    margin: 10vh 0;
    & h1 {
      text-shadow: 2px 2px 10px rgb(80, 220, 140);
      letter-spacing: .2em;
    }
  }
}
.menu {
    width: 300px;
    height: 400px;
    border: 1px solid rgb(80, 220, 140);
    border-radius: 20%;
    &--button {
        width: 60%;
        cursor: pointer;
        font-size: 1.2em;
        line-height: 50px;
        height: 50px;
        margin: 0 auto;
        text-align: center;
        border-radius: 20%;
        margin-top: 20%;
        border: 1px solid rgb(80, 220, 140);
        &:hover {
            box-shadow: 2px 2px 5px rgb(80, 220, 140);
            & a {
                text-shadow: 2px 2px 5px rgb(80, 220, 140);
            }
        }
        & a {
            text-decoration: none;
            color: rgb(80, 220, 140);
            font-family: 'Orbitron';
        }
    }
}
</style>
