import axios from 'axios';
var _ = require('lodash');

export default {
  state: {
    comics: []
  },
  getters: {

  },
  actions: {
    getComics (context) {
      context.commit('GET_COMICS');
      //   const api = 'https://gateway.marvel.com/v1/public/comics?apikey=909e59348e577d639026c940284aa2f4&limit=50';
      //   const api = 'http://gateway.marvel.com/v1/public/comics/56490?apikey=909e59348e577d639026c940284aa2f4';
      const api = 'http://gateway.marvel.com/v1/public/stories/129573/events?apikey=909e59348e577d639026c940284aa2f4';

      //   .get(api, {
      //     params: {
      //       apikey: 'fc0e2b2bcfc273962ce941db43aa2039'
      //     }
      //   })
      axios
        .get(api)
        .then(function (response) {
          console.log(response);
          context.commit('GET_COMICS', response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  mutations: {
    GET_COMICS (state, results) {
      state.comics = results;
    }
  }
};
