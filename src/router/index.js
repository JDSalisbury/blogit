import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Detail from '../views/Detail.vue';
import Blogs from '../views/Blogs.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs,
  },
  {
    path: '/blogs/:id',
    name: 'Detail',
    component: Detail,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
