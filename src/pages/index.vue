<template>
  <v-layout column justify-center align-center>
    <v-card class="mx-auto" min-width="400">
      <v-img :aspect-ratio="120 / 63" :src="image" class="white--text align-end">
        <v-card-title>{{ title }}</v-card-title>
      </v-img>
      <v-card-text class="text-primary">
        <div>{{ description }}</div>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';
import { Route } from 'vue-router';

interface Layout {
  title: string;
  header: string;
  image: string;
  description: string;
}

const defaultLayout: Layout = {
  title: 'Examply.js',
  header: 'Sample Header',
  description: 'Sample Header',
  image: `https://placehold.jp/${(1200 / 'Examply.js'.length) * 2}/123456/ffffff/1200x630.png?text=Examply.js`,
};

const getLayout: (route: Route) => Promise<Layout> = (route: Route) =>
  new Promise(resolve =>
    resolve({
      title: route.fullPath.split('/')[1] || defaultLayout.title,
      header: route.fullPath.split('/').reduce((prev, value, idx) => (idx > 2 ? prev : value)) || defaultLayout.header,
      description: route.fullPath.split('/').join(' ') || defaultLayout.description,
      image: defaultLayout.image,
    })
  );

@Component({
  async asyncData(ctx) {
    const { BASE_URL } = ctx.env;
    const layout = await getLayout(ctx.route);
    const title = `${layout.header}%20-%20${layout.title}`;
    const image = `https://placehold.jp/${(1200 / title.length) * 2}/123456/ffffff/1200x630.png?text=${title}`;

    return {
      baseUrl: BASE_URL,
      ...layout,
      image,
    };
  },
  head(): MetaInfo {
    const host = this.baseUrl;
    return {
      title: this.title,
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Examply.js' },
        { hid: 'og:title', property: 'og:title', content: `${this.header} - ${this.title}` },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'og:url', property: 'og:url', content: `${host}${this.$route.fullPath}` },
        { hid: 'og:image', property: 'og:image', content: this.image },
      ],
    };
  },
})
export default class Default extends Vue implements Layout {
  title!: string;
  header!: string;
  baseUrl!: string;
  image!: string;
  description!: string;
}
</script>
