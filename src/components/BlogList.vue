<template>
  <div>
    <Blog v-for="item in blogState.blogs" :key="item.id" :item="item" />
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  asyncData({ params, store }) {
    console.log('wedid it?');
    return {
      tagName: params.tagid,
      taggedPosts: store.getters.fetchBlogsByTags(params.tagid),
    };
  },
  name: 'BlogList',
  components: {
    Blog: () => import('./Blog'),
  },
  props: ['tagid'],
  computed: mapGetters(['blogState']),
  methods: {
    ...mapActions(['fetchBlogs', 'fetchBlogsByTags']),
  },
  created() {
    this.fetchBlogs();
  },
};
</script>
