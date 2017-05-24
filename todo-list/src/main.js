import 'todomvc-app-css/index.css'

import Vue from 'vue'

//定义一个过滤器
var filters = {
  all(todos) {
    return todos;
  },
  active(todos) {
    return todos.filter((todo) => {
      return !todo.completed;
    });
  },
  completed(todos) {
    return todos.filter((todo) => {
      return todo.completed
    })
  }
};

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

  //计算属性
  computed: {
    remain() {
      return filters.active(this.todos).length;
    },
    isAll: {
       get() {
         return this.remain === 0
       },
        set(value) {
         this.todos.forEach((todo)=>{
           todo.completed = value;
         })
        }
    },
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
