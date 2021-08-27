import vueCron from './vue3-cron/index.vue';

export default {
    install(Vue){
        Vue.component(vueCron.name,vueCron)
    }
}

