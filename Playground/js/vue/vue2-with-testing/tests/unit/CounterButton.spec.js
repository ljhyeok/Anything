import { mount } from '@vue/test-utils';
import CounterButton from '@/components/CounterButton.vue';

describe('CounterButton', () => {
    it('increments count when button is clicked', async () => {
      const wrapper = mount(CounterButton);
      const button = wrapper.find('button');
  
      // 초기 카운터 값 확인
      expect(wrapper.vm.count).toBe(0);
  
      // 버튼 클릭
      await button.trigger('click');
  
      // 클릭 후 카운터 값 확인
      expect(wrapper.vm.count).toBe(1);
    });
  });