import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Profile from '../views/Profile.vue'
import ComputerScience from '../views/ComputerScience.vue'
import Tile from '../views/Tile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Resume',
    name: 'Resume',

    component: Resume
  },
  {
    path: '/Profile',
    name: 'Profile',

    component: Profile
  },
  {
    path: '/ComputerScience',
    name: 'ComputerScience',

    component: ComputerScience
  },
  {
    path: '/Tile',
    name: 'Tile',

    component: Tile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
