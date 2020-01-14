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
      <router-link @click.native="scrollToTop" :to="'/' + item.id">
        <h1>{{ item.title }}</h1>
        <img
          class="img-sm-screen"
          v-if="!detail"
          :src="item.picture"
          alt="test"
        />
      </router-link>
      <div class="tag-box">
        <TagList class="overlay" :tags="item.tags" />
      </div>
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

.img-sm-screen {
  margin: .25rem;
}

.overlay {
  // background rgba(14, 14, 14, 0.81)
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.74), rgb(14, 14, 14));
  width 300px
  justify-content center
  margin-top: -85px;
  margin-bottom: 10px;
}

.tag-box {
  display flex
  justify-content center
}
</style>
