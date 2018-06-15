import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    attractions: []
  },
  getters: {
  },
  actions: {
    getAttractions (context) {
      context.commit('GET_ATTRACTIONS');
      const api =
                'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97';
      axios
        .get(api)
        .then(function (response) {
          context.commit('GET_ATTRACTIONS', response.data.result.records);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  mutations: {
    GET_ATTRACTIONS (state, results) {
      state.attractions = results;
    }
  }
});
