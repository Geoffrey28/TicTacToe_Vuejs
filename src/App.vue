<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box
}

@import url('https://fonts.googleapis.com/css?family=Orbitron');

// VAR
$cgreen: rgb(80, 220, 140);
$cblack: rgba(0,0,0,.9);

#app {
  width: 100vw;
  height: 100vh;
  color: #2c3e50;
  overflow: hidden;
  font-family: 'Orbitron';
  background-color: rgba(0, 0, 0, .9);
}
</style>
