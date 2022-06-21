import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UserNotesIndex from '../views/UserNotesIndex.vue';
import UserNoteCreate from '../views/UserNoteCreate.vue';
import UserNoteEdit from '../views/UserNoteEdit.vue';
import SignupView from '../views/SignupView.vue';
import LoginView from '../views/LoginView.vue';
import LogoutView from '../views/LogoutView.vue';
import StudentsIndex from '../views/StudentsIndex.vue';
import StudentCreate from '../views/StudentCreate.vue';
import ProjectCreate from '../views/ProjectCreate.vue';
import TriviaView from '../views/TriviaView.vue';
import StudentShow from '../views/StudentShow.vue';
import StudentWorkUpload from '../views/StudentWorkUpload.vue'

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
    name: 'user-notes-index',
    component: UserNotesIndex
  },
  {
    path: '/usernotescreate',
    name: 'user-notes-create',
    component: UserNoteCreate
  },
  {
    path: '/usernote/:id/edit',
    name: 'user-note-edit',
    component: UserNoteEdit
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView
  },
  {
    path: '/students',
    name: 'students-index',
    component: StudentsIndex
  },
  {
    path: '/studentcreate',
    name: 'students-create',
    component: StudentCreate
  },
  {
    path: '/projectcreate',
    name: 'project-create',
    component: ProjectCreate
  },
  {
    path: '/trivia',
    name: 'trivia',
    component: TriviaView
  },
  {
    path: '/students/:id',
    name: 'student-show',
    component: StudentShow
  },
  {
    path: '/studentworkupload',
    name: 'student-work-upload',
    component: StudentWorkUpload
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
