import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/public/home'
import ProjectManagerPage from '../pages/private/ProjectManagerPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name : 'home',
      component : Home
    },
    {
      path : '/project1',
      name: 'Project Manager',
      component : ProjectManagerPage
    }
  ]
})
