<template>
  <div>
    <div>Test</div>
    <li v-for="blog in getBlogs" :key="blog.id">
      <Blog :blog="blog" />
    </li>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Blog from './Blog.vue';

export default {
  name: 'List',
  props: {},
  components: { Blog },
  computed: mapGetters(['getBlogs']),
  methods: mapActions(['fetchBlogs']),
  created() {
    this.fetchBlogs();
  },
};
</script>

<style scoped lang="stylus">
li
  display inline-block
  margin 0 10px
</style>
