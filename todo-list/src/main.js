import 'todomvc-app-css/index.css'

import Vue from 'vue'
// let Vue = require('vue')

new Vue({
  el: '.todoapp',
  data: {
    msg: 'hello world',
    title: 'todos',
    newToDo: '',
    todos: [
      {
        content : 'vue',
        completed: false
      },
      {
        content : 'vuex',
        completed: false
      }
    ],
  },
  methods : {
    addToDo() {
      this.todos.push({
        content: this.newToDo,
        completed : false
      });
      this.newToDo = '';
    },
    removeToDo(index){
      this.todos.splice(index,1);
    }
  }



});

// new Vue({
//   el: '.info'
// });
