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
      <div v-for="tag in item.tags" :key="tag.id">
        <router-link @click.native="scrollToTop" :to="'/tag/' + tag.id">
          <h6>
            <i>{{ tag.name }}</i>
          </h6>
        </router-link>
      </div>

      <p>{{ detail ? item.body : vanish(item.body) }}</p>

      <span>Created: {{ item.created_at }}</span>
    </div>
  </div>
</template>
<script>
import { listToString, vanish } from '../lib/helperfunctions';

export default {
  name: 'Blog',
  props: ['item', 'detail'],
  methods: {
    listToString,
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

h6 {
  color: gray;
  font-weight: 800;
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
