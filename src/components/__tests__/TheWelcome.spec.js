import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import TheWelcome from '../TheWelcome.vue';

describe('TheWelcome', () => {
  it('renders properly', () => {
    const wrapper = mount(TheWelcome);

    // Check for the presence of some key text from the component
    expect(wrapper.text()).toContain('Documentation');
    expect(wrapper.text()).toContain('Vue’s official documentation provides you with all information you need to get started.');
    expect(wrapper.text()).toContain('Tooling');
    expect(wrapper.text()).toContain('This project is served and bundled with Vite.');
    expect(wrapper.text()).toContain('Ecosystem');
    expect(wrapper.text()).toContain('Get official tools and libraries for your project:');
    expect(wrapper.text()).toContain('Community');
    expect(wrapper.text()).toContain('Got stuck? Ask your question on Vue Land');
    expect(wrapper.text()).toContain('Support Vue');
    expect(wrapper.text()).toContain('As an independent project, Vue relies on community backing for its sustainability.');
  });
});
