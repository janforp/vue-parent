import 'todomvc-app-css/index.css'

import Vue from 'vue'
// let Vue = require('vue')

new Vue({
  el: '.todoapp',
  data: {
    msg: 'hello world',
    title: 'todos',
    newToDo: 'vue公开课'
  },
  methods : {
    addToDo(e) {
      console.log(e.target.value)
    }
  }



});

// new Vue({
//   el: '.info'
// });
