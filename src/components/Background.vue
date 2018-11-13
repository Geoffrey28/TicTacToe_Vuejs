<template>
    <div class="bg">
        <div class="stars"></div>
        <div class="twinkling"></div>
        <div class="clouds"></div>
    </div>
</template>

<script>
export default {
  name: 'Background'
}
</script>

<style lang="scss" scoped>
.bg {
    width: 100vw;
    height: 100vh;
    top: 0;
    position: absolute;
    z-index: -1;
}

.stars, .twinkling, .clouds {
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
}

.stars {
    z-index: 0;
    background: #000 url('https://image.ibb.co/mjnygo/stars.png') repeat top center;
}

.twinkling {
    z-index: 1;
    background: transparent url('https://image.ibb.co/ir1DE8/twinkling.png') repeat top center;
    animation: move-twink 200s linear infinite;
}

.clouds {
    z-index: 2;
    background: transparent url('https://image.ibb.co/bT4N7T/clouds.png') repeat top center;
    animation: move-clouds 200s linear infinite;
}

@keyframes move-twink {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -10000px 5000px;
    }
}

@keyframes move-clouds {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 10000px 0;
    }
}
</style>
