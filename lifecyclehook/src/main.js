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
let vm = new Vue({
  el: '#app',
  // template: '<App/>',
  components: { App },
  data : {
    msg : 'lifecycle',
    imgs: null,
    arr:[10,12,13]
  },
  methods: {
    getLists() {
      this.$http.get(url).then(res => {
        this.imgs = res.data
        var two = res.data;
        // console.log(two)
        // for(var i = 0; i<two.length;i++) {
        //   console.log(two[i].img)
        // }
      })
    },
    init(){

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
    this.init();
    // console.log(document.querySelectorAll("li").length);
    setTimeout(()=>{
      this.arr = [4,5,6,7]
      console.log(document.querySelectorAll("li").length);
      this.$nextTick(()=>{
        console.log('$nextTick',document.querySelectorAll("li").length);
      })
    },0);

    setTimeout(()=>{
      this.arr = [14,15,16,17,19];
      console.log(document.querySelectorAll("li").length);
      this.$nextTick(()=>{
        console.log('$nextTick',document.querySelectorAll("li").length);
      })
    },1000)
  },
  beforeMount() {
    // console.log(document.querySelectorAll("li").length);
  },
  //到这个阶段dom完全渲染完毕
  mounted() {
    console.log(document.querySelectorAll("li").length);
  },
  beforeUpdate() {
    console.log('beforeUpdate',document.querySelectorAll("li").length);
  },

  //数据更新完毕，如果对更新数据做统一处理在updated钩子中处理即可，
  //如果想分别处理不同的数据更新，同时对dom操作，使用nextTick()函数处理
  updated() {
    console.log('updated',document.querySelectorAll("li").length);
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  },
  activated() {

  },
  deactivated() {

  },

  //对具体某个数据变化做统一处理
  watch:{
    'arr' : function () {

    }
  }
}).$mount("#app");

vm.$destroy()
