<template>
  <div>
    <mq-layout mq="lg">
      <div class="main">
        <img
          class="img-lg-screen"
          v-if="!detail"
          :src="item.picture"
          alt="test"
        />

        <div class="juice">
          <h1 v-if="detail">{{ item.title }}</h1>
          <div v-else>
            <router-link @click.native="scrollToTop" :to="'/' + item.id">
              <h1>{{ item.title }}</h1>
            </router-link>
          </div>
          <TagList :tags="item.tags" />
          <img
            class="img-lg-screen"
            v-if="detail"
            :src="item.picture"
            alt="test"
          />
          <p>{{ detail ? item.body : vanish(item.body) }}</p>

          <span>Created: {{ item.created_at }}</span>
        </div>
      </div>
    </mq-layout>
    <mq-layout mq="md">
      <Phone :item="item" :detail="detail" />
    </mq-layout>
  </div>
</template>
<script>
import { vanish, scrollToTop } from '../lib/helperfunctions';

export default {
  name: 'Blog',
  props: ['item', 'detail'],
  components: {
    // eslint-disable-next-line import/no-unresolved
    TagList: () => import('./TagList'),
    Phone: () => import('./Phone'),
  },
  methods: {
    vanish,
    scrollToTop,
  },
};
</script>

<style scoped lang="stylus">
h1 {
  font-family: 'Verdana, Geneva, Tahoma, sans-serif';
  font-weight: 200;
}

a {
  text-decoration: none;
}

.main {
  margin: 10rem;
  display: flex;
  align-items: center;
  margin-top: 2rem;
}


.juice {
  height: 500px;
}

.img-lg-screen {
  margin-right: 2rem;
  margin-bottom: 2rem;
  float: left;
}
</style>
