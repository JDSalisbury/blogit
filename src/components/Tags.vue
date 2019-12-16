<template>
  <div>
    <div v-for="tag in tags" :key="tag.id">
      <router-link @click.native="scrollToTop" :to="'/tag/' + tag.id">
        <h6>
          <i>{{ tag.name }}</i>
        </h6>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: ['tags'],
};
</script>

<style scoped lang="stylus">
h6 {
  color: gray;
  font-weight: 800;
}
</style>
