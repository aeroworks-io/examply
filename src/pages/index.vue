<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        {{ title }}
        {{ header }}
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';
import { Route } from 'vue-router';

interface Layout {
  title: string;
  header: string;
}

const defaultLayout: Layout = {
  title: 'Examply.js',
  header: 'Sample Header',
};

const getLayout: (route: Route) => Promise<Layout> = (route: Route) =>
  new Promise(resolve =>
    resolve(
      Object.assign({}, defaultLayout, {
        title: route.fullPath.split('/')[1],
        header: route.fullPath.split('/').reduce((_, value) => value),
      })
    )
  );

@Component({
  async asyncData(ctx) {
    const { BASE_URL } = ctx.env;
    const layout = await getLayout(ctx.route);
    return {
      baseUrl: BASE_URL,
      ...layout,
    };
  },
  head(): MetaInfo {
    const host = this.baseUrl;
    return {
      title: this.title,
      meta: [
        { hid: 'og:site_name', property: 'og:site_name', content: 'Examply.js' },
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'og:url', property: 'og:url', content: `${host}${this.$route.fullPath}` },
      ],
    };
  },
})
export default class Default extends Vue {
  title!: string;
  header!: string;
  baseUrl!: string;
}
</script>
