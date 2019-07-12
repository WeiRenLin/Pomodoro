import Vue from 'vue'
import App from './App'
import router from './router'
import '../fb'
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    template: '<app/>',

    render: h => h(App),
})
