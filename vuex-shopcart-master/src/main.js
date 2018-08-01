import Vue from 'vue';
import App from './App';

//引入store----vuex
import store from './store'

new Vue({
    el: '#app',

    //把 vuex 引入vue中
    store,
    template: '<App/>',
    components: {
        App
    }
})
