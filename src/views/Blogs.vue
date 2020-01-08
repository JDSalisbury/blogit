<template>
  <div class="Blogs">
      <BlogList />
  </div>
</template>

<script>
export default {
  name: 'Blogs',
  components: {
    BlogList: () => import('@/components/BlogList'),
  },
};
</script>
