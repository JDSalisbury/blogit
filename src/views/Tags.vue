<template>
  <div class="Tags">
    {{ $route.params.id }}
    <BlogList :tagid="$route.params.id" />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Tags',
  components: {
    BlogList: () => import('@/components/BlogList'),
    Footer: () => import('@/components/Footer'),
  },
};
</script>
