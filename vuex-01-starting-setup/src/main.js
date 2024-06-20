import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },

  // Vuex Mutations : Vuex의 데이터인 state 값을 변경하는 로직을 의미
  // 인자를 받아 Vuex에 넘겨줄 수 있고 computed가 아닌 methods에 등록
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },

  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) return 0;
      if (finalCounter > 100) return 100;
      return finalCounter;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
