import { storiesOf } from '@storybook/vue';
import { VBtn } from 'vuetify/lib';

storiesOf('Vuetify Components', module).add('VBtn', () => ({
  components: { VBtn },
  template: `
<div>
  <div class="my-2">
    <v-btn large>Normal</v-btn>
  </div>
  <div class="my-2">
    <v-btn large color="primary">Primary</v-btn>
  </div>
  <div class="my-2">
    <v-btn large color="error">Error</v-btn>
  </div>
  <div class="my-2">
    <v-btn large disabled>Disabled</v-btn>
  </div>
</div>
`,
}));
