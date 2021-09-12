import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsGrid from '../views/NewsGrid.vue';
import NewsPost from '../views/NewsPost.vue';
import History from '../views/History.vue';
// import Fallback from '../views/Fallback.vue';
import store from '../store/index';

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
    redirect: '/',
    // component: Fallback,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  store.dispatch('history/history', {
    to: to.path,
    from: from.path,
    timestamp: new Date(),
  });
  next();
});

export default router;
