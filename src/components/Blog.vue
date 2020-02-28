<template>
  <div>
    <mq-layout mq="lg">
      <Desktop :item="item" :detail="detail" />
    </mq-layout>
    <mq-layout mq="md">
      <!-- <Tablet :item="item" :detail="detail" /> -->
      <div style="float: left">
        <Tablet :item="item" :detail="detail" />
      </div>
      <div style="float: right">
        <Tablet :item="item" :detail="detail" />
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
    Desktop: () => import('./Desktop'),
    Phone: () => import('./Phone'),
    Tablet: () => import('./Tablet'),
  },
};
</script>
