// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';

import fontawesome from '@fortawesome/fontawesome';
import faStar from '@fortawesome/fontawesome-free-regular/faStar';
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faCalendarAlt from '@fortawesome/fontawesome-free-regular/faCalendarAlt';
import faFile from '@fortawesome/fontawesome-free-regular/faFile';
import faCommentDots from '@fortawesome/fontawesome-free-regular/faCommentDots';

fontawesome.library.add(faStar, faPencilAlt, faPlus, faCalendarAlt, faFile, faCommentDots);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
