<template>
    <div class="endgame">
        <p>Winner is</p>
        <p>{{ winner }}</p>
    </div>
</template>

<script>
export default {
  name: 'EndGame',
  props: {
    winner: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.endgame {
    width: 500px;
    height: 500px;
    text-align: center;
    color: rgb(80, 220, 140);
    font-size: 3em;
    animation: mounted_anim 1.5s cubic-bezier(.61,1.17,.82,.95);
    & p:first-of-type {
        margin-top: 20vh;
    }
}

@keyframes mounted_anim {
    0% {
        font-size: 0;
    }
}
</style>
