import axios from 'axios';

export default {
  state: {
    attractions: [],
    activeId: null,
    filters: {
      location: ''
    }
  },
  getters: {
    filterAttractions (state) {
      if (!state.attractions) return;
      if (state.filters.location) {
        return state.attractions.filter((attr) => attr.Zone === state.filters.location);
      } else {
        return state.attractions;
      }
    },
    resultsTotal (state, getters) {
      if (!state.attractions) return;
      return getters.filterAttractions.length;
    },
    readAttraction (state) {
      if (!state.attractions) return;
      return state.attractions.filter(attr => attr._id === state.activeId)[0];
    }
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
        });
    },
    setFilters (context, content) {
      context.commit('SET_FILTERS', content);
    },
    setReadAttraction (context, id) {
      console.log('setReadAttraction', id);
      context.commit('SET_READ_ATTRACTION', id);
    }
  },
  mutations: {
    GET_ATTRACTIONS (state, results) {
      state.attractions = results;
    },
    SET_FILTERS (state, content) {
      state.filters[content.name] = content.value;
    },
    SET_READ_ATTRACTION (state, id) {
      state.activeId = id;
      console.log(state.activeId);
    }
  }
};
