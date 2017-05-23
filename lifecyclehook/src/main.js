// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//模块化加载
import Vue from 'vue'
// console.log(Vue)

//先按照resources
import Resource from 'vue-resource'
Vue.use(Resource)

import App from './App'

let url = 'http://localhost:9000/pic/list'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // template: '<App/>',
  components: { App },
  data : {
    msg : 'lifecycle',
    imgs: null
  },
  methods: {
    getLists() {
      this.$http.get(url).then(res => {
        this.imgs = res.data
        var two = res.data;
        console.log(two)
        for(var i = 0; i<two.length;i++) {
          console.log(two[i].img)
        }
      })
    }
  },
  beforeCreate() {
    //数据，方法在这个时候还没有实例化，会报错
    // console.log("beforeCreate",this.msg,this.getLists())
  },
  //常用
  created() {
    //可以访问到了
    // console.log("created",this.msg,this.getLists())
    this.getLists();
  },
  beforeMount() {

  },
  //常用
  mounted() {

  },
  beforeUpdate() {

  },
  updated() {

  },
  beforeDestroy() {

  },
    destroyed() {

  },
  activated() {

  },
  deactivated() {

  }
})
