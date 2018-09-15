<template>
  <div class="home">
    <header class="home--head">
      <h1>Tic.Tac.Toe</h1>
    </header>
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
export default {
  name: 'Home',
  components: {
    'Menu': Menu
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
  &--head {
    width: 100%;
    text-align: center;
    color: rgb(80, 220, 140);
    & h1 {
      text-shadow: 2px 2px 10px rgb(80, 220, 140);
      letter-spacing: .2em;
    }
  } 
}
</style>


