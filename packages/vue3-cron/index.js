
import vue3Cron from './index.vue';
 
/* istanbul ignore next */
vue3Cron.install = function(Vue) {
  Vue.component(vue3Cron.name, vue3Cron);
};
export default vue3Cron;