<template>
  <div class="Tags">
    <Blogs :tagid="$route.params.id" />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Tags',
  components: {
    Blogs: () => import('./Blogs'),
    Footer: () => import('@/components/Footer'),
  },
};
</script>
