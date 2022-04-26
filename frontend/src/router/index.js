import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Register from '../views/Register.vue'
// import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
      path: '/',
      name: 'Home',
      component: Home,
  },
  {
      path: '/register',
      name: 'Register',
      component: () =>
          import(/* webpackChunkName: "dashboard" */ '../views/Register.vue'),
      meta: {
        authRequired: true,
      }
  },
  {
      path: '/login',
      name: 'Login',
      component: () =>
        import(/* webpackChunkName: "dashboard" */ '../views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () =>
    import(/* webpackChunkName: "dashboard" */ '../views/Home.vue'),
    meta: {
      authRequired: true,
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if(localStorage.getItem('authData')){
      next();
    }else{
      alert('You must be logged in to see this page');
      next({
        path: '/login',
      });
    }
  } else {
    next();
  }
});

export default router
