import axios from 'axios';
var _ = require('lodash');

export default {
  state: {
    attractions: [],
    activeId: null,
    filters: {
      keyword: '',
      location: '',
      categories: []
    },
    tags: []
  },
  getters: {
    filterAttractions (state) {
      // todo 寫太醜
      if (!state.attractions) return;
      let res = state.attractions;
      if (state.filters.location) {
        res = res.filter((attr) => attr.Zone === state.filters.location);
      }
      if (state.filters.keyword) {
        let tags = ['Name', 'Description'];
        res = res.filter((attr) => {
          let flag = false;
          tags.forEach(tag => {
            if (attr[tag].indexOf(state.filters.keyword) !== -1) {
              flag = true;
            }
          });
          return flag;
        }).map(attr => {
          attr.Name = attr.Name.replace(state.filters.keyword, `<span class=highlight>${state.filters.keyword}</span>`);
          attr.Description = attr.Description.replace(state.filters.keyword, `<span class=highlight>${state.filters.keyword}</span>`);
          return attr;
        });
      }
      if (state.filters.categories) {
        state.filters.categories.forEach(category => {
          if (category === '免費參觀') {
            res = res.filter(attr => attr.Ticketinfo === '免費參觀');
          }
          if (category === '全天候開放') {
            res = res.filter(attr => attr.Opentime === '全天候開放');
          }
        });
      } else {
        return res;
      }
      return res;
    },
    resultsTotal (state, getters) {
      if (!state.attractions) return;
      return getters.filterAttractions.length;
    },
    readAttraction (state) {
      if (!state.attractions) return;
      return state.attractions.filter(attr => attr._id === state.activeId)[0];
    },
    filterTags (state) {
      let tags = [];
      _.forEach(state.filters, (filter, key) => {
        if (!filter || key === 'categories') return;
        tags.push({
          key: key,
          value: filter
        });
      });
      return tags;
      // return _.compact(_.flattenDeep(Object.values(state.filters)));
    },
    filterCategoriesTags (state) {
      return state.filters.categories;
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
          console.log(error);
        });
    },
    setFilters (context, content) {
      context.commit('SET_FILTERS', content);
    },
    setReadAttraction (context, id) {
      context.commit('SET_READ_ATTRACTION', id);
    },
    removeFilter (context, data) {
      context.commit('REMOVE_FILTER', data);
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
    },
    REMOVE_FILTER (state, data) {
      if (data.key === 'categories') {
        let index = _.indexOf(state.filters.categories, data.value);
        state.filters.categories.splice(index, 1);
      } else {
        state.filters[data.key] = '';
      }
    }
  }
};
