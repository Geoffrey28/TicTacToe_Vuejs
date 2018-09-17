<template>
  <div id="app">
    <div class="appcontent">
      <router-view v-on:setMode="setMode" :mode="mode"></router-view>
    </div>
    <Background />
  </div>
</template>

<script>
import Background from '@/components/Background'
export default {
  name: 'app',
  components: {
    'Background': Background
  },
  data () {
    return {
      mode: null
    }
  },
  methods: {
    setMode (mode) {
      this.mode = mode
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box
}

@import url('https://fonts.googleapis.com/css?family=Orbitron');

#app {
  width: 100vw;
  height: 100vh;
  color: #2c3e50;
  overflow: hidden;
  font-family: 'Orbitron';
  position: relative;
}
</style>
