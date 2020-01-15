<template>
  <div>
    <mq-layout mq="lg">
      <Desktop :item="item" :detail="detail" />
    </mq-layout>
    <mq-layout mq="md">
      <Phone :item="item" :detail="detail" />
    </mq-layout>
  </div>
</template>
<script>
export default {
  name: 'Blog',
  props: ['item', 'detail'],
  components: {
    // eslint-disable-next-line import/no-unresolved
    Desktop: () => import('./Desktop'),
    Phone: () => import('./Phone'),
  },
};
</script>
