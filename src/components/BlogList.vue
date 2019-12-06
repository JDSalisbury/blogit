<template>
  <div>
    <Blog v-for="item in blogState.blogs" :key="item.id" :item="item" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Blog from './Blog.vue';

export default {
  name: 'BlogList',
  components: {
    Blog,
  },
  computed: mapGetters(['blogState']),
  methods: mapActions(['fetchBlogs']),
  created() {
    this.fetchBlogs();
  },
};
</script>
