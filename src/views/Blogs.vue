<template>
  <div>
    <mq-layout :mq="['sm', 'lg']">
      <Blog
        v-for="item in resultsFilter(blogState.blogs)"
        :key="item.id"
        :item="item"
      />
    </mq-layout>
    <mq-layout mq="md">
      <div v-if="resultsFilter(blogState.blogs).length <= 3">
        <Blog
          v-for="item in resultsFilter(blogState.blogs)"
          :key="item.id"
          :item="item"
        />
      </div>
      <div v-else style="display: flex; justify-content: space-around">
        <div>
          <div v-for="item in resultsFilter(blogState.blogs)" :key="item.id">
            <Blog v-if="item && item.id % 2 != 0" :key="item.id" :item="item" />
          </div>
        </div>
        <div>
          <div v-for="item in resultsFilter(blogState.blogs)" :key="item.id">
            <Blog v-if="item && item.id % 2 == 0" :key="item.id" :item="item" />
          </div>
        </div>
      </div>
    </mq-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Blogs',
  props: ['tagid'],
  components: {
    Blog: () => import('../components/Blog'),
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
