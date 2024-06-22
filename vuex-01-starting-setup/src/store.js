import { createStore } from 'vuex';

const counterModule = {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      console.log(context);
      context.commit('increase', payload);
    },
  },
  getters: {
    testAuth(state) {
      return state.isLoggedIn;
    },
    finalCounter(state) {
      return state.counter;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
};

const store = createStore({
  modules: {
    numbers: counterModule,
  },

  state() {
    return {
      isLoggedIn: false,
    };
  },

  // Vuex Mutations : Vuex의 데이터인 state 값을 변경하는 로직을 의미
  // 인자를 받아 Vuex에 넘겨줄 수 있고 computed가 아닌 methods에 등록
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },

  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },

  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
