import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import UserDash from '@/components/UserDash'
import NewRecipe from '@/components/NewRecipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/recipe/new',
      name: 'NewRecipe',
      component: NewRecipe
    },
    {
      path: '/user/:username/',
      name: 'UserDash',
      component: UserDash
    }
  ]
})
