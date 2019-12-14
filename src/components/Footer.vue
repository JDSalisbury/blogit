<template>
  <div class="tags">
    <h1>Test Footer</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Tags',
  components: {},
  computed: mapGetters(['tagState']),
  methods: mapActions(['fetchTags']),
  created() {
    this.fetchTags();
  },
};
</script>
