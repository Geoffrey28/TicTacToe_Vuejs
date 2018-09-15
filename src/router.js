import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Views
import Home from './views/Home.vue'
import Game from './views/Game.vue'

// Components
import Board from './components/Board'
import EndGame from './components/EndGame'

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Game/',
      component: Game,
      children: [
        {
          path: '',
          component: Board
        },
        {
          path: '/end',
          component: EndGame
        }
      ]
    }
  ]
})
