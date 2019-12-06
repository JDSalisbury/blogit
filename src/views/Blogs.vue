<template>
  <div class="Blogs">
    <BlogList />
  </div>
</template>

<script>
// @ is an alias to /src
import BlogList from '@/components/BlogList.vue';

export default {
  name: 'Blogs',
  components: {
    BlogList,
  },
};
</script>
