<template>
  <div>
    <Blog
      v-for="item in resultsFilter(blogState.blogs)"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'BlogList',
  props: ['tagid'],
  components: {
    Blog: () => import('./Blog'),
  },
  computed: mapGetters(['blogState']),
  methods: {
    ...mapActions(['fetchBlogs']),
    resultsFilter(blogs) {
      if (this.$route.params.id) {
        return blogs.filter(
          blog =>
            // eslint-disable-next-line implicit-arrow-linebreak
            blog.tags.some(tag => tag.id === this.$route.params.id),
          // eslint-disable-next-line function-paren-newline
        );
        // eslint-disable-next-line no-else-return
      } else {
        return blogs;
      }
    },
  },
  created() {
    this.fetchBlogs();
  },
};
</script>
