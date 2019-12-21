<template>
  <div>
    <div id="tag-area" v-for="tag in tags" :key="tag.id">
      <router-link @click.native="scrollToTop" :to="'/tag/' + tag.id">
        <h6>
          <i>{{ tag.name }}</i>
        </h6>
      </router-link>
    </div>
  </div>
</template>

<script>
import { scrollToTop } from '../lib/helperfunctions';

export default {
  name: 'TagList',
  props: ['tags'],
  methods: {
    scrollToTop,
  },
};
</script>

<style scoped lang="stylus">
h6 {
  color: gray;
  font-weight: 800;
  padding 4px
}
a {
      text-decoration: none;
}
#tag-area {
  display inline-block
}
</style>
