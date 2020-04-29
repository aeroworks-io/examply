import { mount } from '@vue/test-utils';
import Button from '@/components/Button.vue';

describe('Button.vue', () => {
  it('snapshot', () => {
    const wrapper = mount(Button);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
