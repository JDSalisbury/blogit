import Vue from 'vue';
import VueRouter from 'vue-router';
import Detail from '../views/Detail.vue';
import Blogs from '../views/Blogs.vue';

import Tags from '../views/Tags.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'blogs',
    component: Blogs,
  },
  {
    path: '/:id',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/tag/:id',
    name: 'Tags',
    component: Tags,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
