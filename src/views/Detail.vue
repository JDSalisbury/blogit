<template>
  <div class="detail">
    <Blog :item="getDetail" :key="getDetail.id" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Blog from '../components/Blog.vue';

export default {
  name: 'Detail',
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  components: {
    Blog,
  },
  computed: mapGetters(['getDetail']),
  methods: mapActions(['fetchBlog']),
  created() {
    this.fetchBlog(this.id);
    console.log(this.getDetail);
  },
};
</script>
