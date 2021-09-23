import vue3Cron_ from "./vue3-cron";

const components = [vue3Cron_];

const install = function(Vue) {
  components.map((component) => {
    Vue.component(component.name, component);
  });
};
/* 支持使用标签的方式引入 */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export const vue3Cron = vue3Cron_;

export default {
  install,
};
