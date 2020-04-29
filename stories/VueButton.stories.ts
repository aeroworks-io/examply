import { storiesOf } from '@storybook/vue';

// Component
import VueButton from '@/components/VueButton';

storiesOf('Button', module).add('VueButton', () => ({
  components: { VueButton },
  template: `<VueButton>default</VueButton>`,
}));
