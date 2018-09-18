<template>
    <div class="actions">
        <div class="actions--home">
          <router-link to="/">Go Back</router-link>
        </div>
        <div class="actions--item">
            <p v-if="this.mode === 'solo'" title="Laiwb : Little Artificial Intelligence Without Brain">Laiwb [X]</p>
            <p v-else>Player 1 [X]</p>
            <p class="score">{{ this.score.one }}</p>
        </div>
        <div class="actions--item">
            <p v-if="this.mode === 'solo'">You [O]</p>
            <p v-else>Player 2 [O]</p>
            <p class="score">{{ this.score.two }}</p>
        </div>
        <div class="reset" @click="$emit('reset')">
            <router-link to="/game">Reset</router-link>
        </div>
        <div class="wtf" v-show="this.winner === ''">
            <p @click="$emit('wtf')">W T F</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Actions',
  props: {
    mode: String,
    winner: String,
    score: Object
  }
}
</script>

<style lang="scss" scoped>
.actions {
    margin-right: 20%;
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
    &--item {
        color: rgb(80, 220, 140);
        font-size: 1.5em;
        p {
            text-align: center;
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
