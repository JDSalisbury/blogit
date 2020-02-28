<template>
  <div>
    <!-- {{ this.$route.name }} -->
    <div v-if="this.$route.name !== 'Tags'">
      <img id="logo" alt="Vue logo" src="@/assets/kiwi.svg" />
    </div>
    <div v-else>
      <div v-if="this.$route.params.id === '0'">
        <img id="logo" alt="Vue logo" src="@/assets/dvl.png" />
      </div>
      <div v-if="this.$route.params.id === '1'">
        <img id="logo" alt="Vue logo" src="@/assets/dragon.png" />
      </div>
      <div v-if="this.$route.params.id === '2'">
        <img id="logo" alt="Vue logo" src="@/assets/robot.svg" />
      </div>
      <div v-if="this.$route.params.id === '3'">
        <img id="logo" alt="Vue logo" src="@/assets/samy.png" />
      </div>
      <div v-if="this.$route.params.id === '4'">
        <img id="logo" alt="Vue logo" src="@/assets/pika.png" />
      </div>
      <div v-if="this.$route.params.id === '5'">
        <img id="logo" alt="Vue logo" src="@/assets/mtg.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Icon',
  props: [],
  computed: mapGetters(['tagState']),
  created() {
    this.fetchTags();
  },
  methods: {
    src(tags) {
      // eslint-disable-next-line radix
      return tags.find(t => t.id === parseInt(this.$route.params.id)).icon;
    },
  },
};
</script>

<style lang="stylus">
#logo
  width 65px
  margin-left 15px
  margin-right 15px
</style>
