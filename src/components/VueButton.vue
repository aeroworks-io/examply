<template>
  <button class="button">
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class TheParagraph extends Vue {}
</script>

<style>
.button {
  font-size: 14px;
  border: solid 1px;
  border-radius: 5px;
  margin: 10px 10px 10px 0;
  padding: 10px 15px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
  -webkit-font-smoothing: antialiased;
}
</style>
