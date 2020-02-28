<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/">Blogs</router-link>
      </div>
      <Icon />
      <div>
        <a href="https://jdsalisbury.com/" target="_blank">Profile</a> |
        <router-link to="/">Contact</router-link>
      </div>
    </div>

    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  props: [],
  components: {
    Icon: () => import('./components/Icon'),
  },
};
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 30px

#nav
  display flex
  justify-content center
  align-items center

#logo
  width 65px
  margin-left 15px
  margin-right 15px
</style>
