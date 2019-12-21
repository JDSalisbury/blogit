<template>
  <div class="Detail">
    <Blog :item="getDetail" :key="getDetail.id" :detail="true" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Detail',
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  components: {
    Blog: () => import('@/components/Blog'),
  },
  computed: mapGetters(['getDetail']),
  methods: mapActions(['fetchBlog']),
  created() {
    this.fetchBlog(this.id);
  },
};
</script>
