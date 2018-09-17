<template>
    <div class="menu">
        <div class="menu--button">
            <router-link to="/Game" @click.native="setMode('solo')">Solo</router-link>
        </div>
        <div class="menu--button">
            <router-link to="/game" @click.native="setMode('multi')">1 vs 1</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Menu',
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
