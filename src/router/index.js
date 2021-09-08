import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsGrid from '../views/NewsGrid.vue';
import NewsPost from '../views/NewsPost.vue';
import History from '../views/History.vue';
import Fallback from '../views/Fallback.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/news',
  },
  {
    path: '/news',
    name: 'News',
    component: NewsGrid,
  },
  {
    path: '/news/history',
    name: 'History',
    component: History,
  },
  {
    path: '/news/:id',
    name: 'NewsPost',
    props: true,
    component: NewsPost,
  },
  {
    path: '*',
    name: 'Fallback',
    component: Fallback,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
