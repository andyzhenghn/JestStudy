import { shallowMount } from '@vue/test-utils';
import ParentComponent from '../page/parentComponent';
import ChildComponent from '../page/ChildComponent';
import Vue from 'vue';

describe('ParentComponent', () => {
    it('displays "Emitted!" when custom event is emitted', () => {
        const wrapper = shallowMount(ParentComponent);
        wrapper.find(ChildComponent).vm.$emit('custom');
        Vue.nextTick().then(() => {
            expect(wrapper.html()).toContain('Emitted!');
        })
    });
});
