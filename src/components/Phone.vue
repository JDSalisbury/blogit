<template>
  <div>
    <router-link @click.native="scrollToTop" :to="'/' + item.id">
      <h1>{{ item.title }}</h1>
      <img class="img-sm-screen" :src="item.picture" alt="test" />
    </router-link>
    <div class="tag-box">
      <TagList class="overlay" :tags="item.tags" />
    </div>
    <div v-if="detail">
      <p>{{ detail && item.body }}</p>
      <span>Created: {{ item.created_at }}</span>
    </div>
  </div>
</template>

<script>
import { scrollToTop } from '../lib/helperfunctions';

export default {
  name: 'Phone',
  props: ['item', 'detail'],
  components: {
    // eslint-disable-next-line import/no-unresolved
    TagList: () => import('./TagList'),
  },
  methods: {
    scrollToTop,
  },
};
</script>

<style scoped lang="stylus">
h1 {
  font-family: 'Verdana, Geneva, Tahoma, sans-serif';
  font-weight: 200;
}

a {
  text-decoration: none;
}

p {
    padding 10px
}

.img-sm-screen {
  margin: .25rem;
}

.overlay {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.74), rgb(14, 14, 14));
  width 300px
  justify-content center
  margin-top: -85px;
  margin-bottom: 10px;
}

.tag-box {
  display flex
  justify-content center
}
</style>
