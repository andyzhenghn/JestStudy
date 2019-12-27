import YesNoComponent from '../page/yesNoComponent';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';

describe('Click event', () => {
  it('Click on yes button calls our method with arguments "yes"', () => {
    const spy = sinon.spy();
    const wrapper = mount(YesNoComponent, {
      propsData: {
        callMe: spy,
      },
    });
    wrapper.find('button.yes').trigger('click');
    expect(spy.calledWith('yes')).toBe(true);
  });
});