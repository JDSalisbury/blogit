<template>
  <div>
    <mq-layout mq="lg">
      <Desktop :item="item" :detail="detail" />
    </mq-layout>
    <mq-layout mq="md" style="display: flex; justify-content: space-between">
      <div>
        <div v-if="item && item.id % 2 != 0">
          <Tablet :item="item" :detail="detail" />
        </div>
      </div>
      <div>
        <div v-if="item && item.id % 2 == 0">
          <Tablet :item="item" :detail="detail" />
        </div>
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
