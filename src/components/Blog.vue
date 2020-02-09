<template>
  <div>
    <mq-layout mq="lg">
      <Desktop :item="item" :detail="detail" />
    </mq-layout>
    <mq-layout mq="md">
      <div style="float: left">
        <Phone :item="item" :detail="detail" />
      </div>
      <div style="float: right">
        <Phone :item="item" :detail="detail" />
      </div>
    </mq-layout>
    <mq-layout mq="sm">
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
