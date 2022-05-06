import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UserNotesIndex from '../views/UserNotesIndex.vue';
import UserNoteCreate from '../views/UserNoteCreate.vue';
import SignupView from '../views/SignupView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/usernotesindex',
    name: 'UserNotesIndex',
    component: UserNotesIndex
  },
  {
    path: '/usernotescreate',
    name: 'UserNoteCreate',
    component: UserNoteCreate
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
