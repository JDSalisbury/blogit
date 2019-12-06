<template>
  <div class="about">
    <BlogList />
  </div>
</template>

<script>
// @ is an alias to /src
import BlogList from '@/components/BlogList.vue';

export default {
  name: 'About',
  components: {
    BlogList,
  },
};
</script>
