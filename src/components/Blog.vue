<template>
  <div class="main">
    <img :src="item.picture" alt="test" />
    <div class="juice">
      <h1 v-if="detail">{{ item.title }}</h1>
      <div v-else>
        <router-link @click.native="scrollToTop" :to="'/' + item.id">
          <h1>{{ item.title }}</h1>
        </router-link>
      </div>
      <Tags :tags="item.tags" />
      <p>{{ detail ? item.body : vanish(item.body) }}</p>

      <span>Created: {{ item.created_at }}</span>
    </div>
  </div>
</template>
<script>
import { vanish } from '../lib/helperfunctions';

export default {
  name: 'Blog',
  props: ['item', 'detail'],
  components: {
    Tags: () => import('./Tags'),
  },
  methods: {
    vanish,
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped lang="stylus">
h1 {
  font-family: 'Verdana, Geneva, Tahoma, sans-serif';
  font-weight: 200;
}

.main {
  margin: 12rem;
  display: flex;
  align-items: center;
  margin-top: 2rem;
}

.juice {
  margin: 25px;
  height: 500px;
  // margin-top 0px
}
</style>
