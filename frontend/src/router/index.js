import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/public/home'
import ProjectManagerPage from '../pages/private/ProjectManagerPage'
import { store } from '../store'

Vue.use(VueRouter)


const routes = [
    {
      path: '/',
      name : 'home',
      component : Home
    },
    {
      path : '/project1',
      name: 'Project Manager',
      meta: {
        isAuthenticated: true
      },
      component : ProjectManagerPage
    }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
 if (to.matched.some(record => record.meta.isAuthenticated)) {
		console.log(store.actions);
 } else {
    next();
   }
});

export default router
