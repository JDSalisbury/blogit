<template>
  <div class="main">
    <img :src="blog.picture" alt="test" />
    <div class="juice">
      <h3>{{ blog.body }}</h3>
      <span>Created: {{ blog.created_at }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Blog',
  props: ['blog'],
};
</script>

<style scoped lang="stylus">
.main
//   border 1px solid black
  margin 2px
  display flex
  align-items center

.juice
    margin 10px
</style>
