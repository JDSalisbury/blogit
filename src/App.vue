<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/">Blogs</router-link>
      </div>
      <img id="logo" alt="Vue logo" src="../src/assets/kiwi.svg" />
      <div>
        <a href="https://jdsalisbury.netlify.com/" target="_blank">Profile</a> |
        <router-link to="/">Contact</router-link>
      </div>
    </div>

    <router-view />
  </div>
</template>

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
