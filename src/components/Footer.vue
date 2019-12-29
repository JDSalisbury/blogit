<template>
  <div class="tags">
    <h1>Test Footer{{ $mq }}</h1>
    <mq-layout mq="sm">
      "SMALL SMALL"
    </mq-layout>
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
