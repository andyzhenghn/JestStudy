import { mount, shallowMount } from '@vue/test-utils';
import Counter from '../page/counter';
// import Vue from 'vue';

describe('Counter', () => {
  const wrapper = mount(Counter);

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>');
  });

  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true);
  });

  it('button click should increment the count', () => {
    expect(wrapper.vm.count).toBe(0);
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.vm.count).toBe(1);
  });

  // it('will time out', done => {
  //   Vue.nextTick(() => {
  //     expect(true).toBe(false);
  //     done();
  //   });
  // });

  // it('will catch the error using done', done => {
  //   Vue.config.errorHandler = done;
  //   Vue.nextTick(() => {
  //     expect(true).toBe(false);
  //     done();
  //   });
  // });

  // it('will catch the error using a promise', () => {
  //   return Vue.nextTick().then(function() {
  //     expect(true).toBe(false);
  //   });
  // });
});