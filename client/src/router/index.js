import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AddPost from '../views/AddPost.vue';
import Post from '../views/Post.vue';
import EditPost from '../views/EditPost.vue';

import Login from '../views/Login.vue';
import Register from '../views/Register.vue'

import { auth } from '../../src/middlewares/auth';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { middleware: auth }
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPost,
    meta: { middleware: auth }
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post,
    meta: { middleware: auth }
  },
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPost,
    meta: { middleware: auth }
  },
  {
    path: '/about',
    name: 'about',
    meta: { middleware: auth },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = require(`@/middlewares/${to.meta.middleware}`).default;
    if (middleware) {
      middleware({ to, from, next, router })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
