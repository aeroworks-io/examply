<template>
  <v-app dark>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} Aeroworks.io</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {};
</script>
