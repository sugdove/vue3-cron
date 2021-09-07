
import vue3Cron from './vue3-cron';
const components = [
  vue3Cron
  // ...如果还有的话继续添加
]
const install = function (Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}
/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export const cronExp = vue3Cron
export default {
  install
}
