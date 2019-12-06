<template>
  <div class="main">
    <img :src="item.picture" alt="test" />
    <div class="juice">
      <h1 v-if="detail">{{ item.title }}</h1>
      <div v-else>
        <router-link :to="'/blogs/' + item.id">
          <h1>{{ item.title }}</h1>
        </router-link>
      </div>

      <h6>
        <i>{{ listToString(item.tags) }}</i>
      </h6>

      <p>{{ detail ? item.body : vanish(item.body) }}</p>

      <span>Created: {{ item.created_at }}</span>
    </div>
  </div>
</template>
<script>
import { listToString, vanish } from '../lib/helperfunctions';

export default {
  name: 'Blog',
  props: ['item', 'detail'],
  methods: {
    listToString,
    vanish,
  },
};
</script>

<style scoped lang="stylus">
h1
  font-family 'Verdana, Geneva, Tahoma, sans-serif'
  font-weight 200

h6
  color gray
  font-weight 800

.main
  margin 12rem
  display flex
  align-items center

.juice
    margin 25px
</style>
