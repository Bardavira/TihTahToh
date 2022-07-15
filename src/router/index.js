import { createRouter, createWebHistory } from 'vue-router'
import Base from '../views/Base-TihTahToh.vue'
import RegrasJogo from '../views/RegrasJogo.vue'

const routes = [
  {
    path: '/',
    name: 'Base',
    component: Base
  },
  {
    path: '/regras-jogo',
    name: 'regras-jogo',
    component: RegrasJogo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
