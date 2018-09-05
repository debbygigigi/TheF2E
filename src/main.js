// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'normalize.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import fontawesome from '@fortawesome/fontawesome';
import faStar from '@fortawesome/fontawesome-free-regular/faStar';
import fasStar from '@fortawesome/fontawesome-free-solid/faStar';
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
import faCalendarAlt from '@fortawesome/fontawesome-free-regular/faCalendarAlt';
import faFile from '@fortawesome/fontawesome-free-regular/faFile';
import faCommentDots from '@fortawesome/fontawesome-free-regular/faCommentDots';
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt';
import faTimesCircle from '@fortawesome/fontawesome-free-regular/faTimesCircle';
import faHandHoldingUsd from '@fortawesome/fontawesome-free-solid/faHandHoldingUsd';
import faBoxes from '@fortawesome/fontawesome-free-solid/faBoxes';
import faMoneyBillAlt from '@fortawesome/fontawesome-free-solid/faMoneyBillAlt';

import VueMq from 'vue-mq';

fontawesome.library.add(faStar, fasStar, faPencilAlt, faPlus, faCalendarAlt, faFile, faCommentDots, faMapMarkerAlt, faTimesCircle, faHandHoldingUsd, faBoxes, faMoneyBillAlt);
Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.use(VueMq, {
  breakpoints: {
    sm: 767,
    md: 991,
    lg: Infinity
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
