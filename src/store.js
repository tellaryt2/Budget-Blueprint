import { createStore } from 'vuex';

export default createStore({
  state: {
    budget: 10000,
  },
  mutations: {
    updateBudget(state, newValue) {
      state.budget = newValue;
    },
  },
});