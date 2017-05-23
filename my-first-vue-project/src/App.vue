<template>
  <div id="app">
    <h1 v-html="title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-bind:class="{finished: item.isFinished}"
        v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
    <p>child tells me : {{ childWords }}</p>
    <!-- 使用组件A -->
    <!-- 父向子传消息 -->
    <component-a msgfromfather='you Die!' 
      v-on:child-tell-me-something='listenToMyBoy'></component-a>
  </div>
</template>

<script>
//后面就可以直接使用Store中的方法
import Store from './store.js'
//引用组件A
import ComponentA from './components/componentA'
// console.log(Store)
export default {
  data () {
    return {
      title: 'this is a todo list',
      //每次刷新会去浏览器本地数据库中拿出保存的值
      items: Store.fetch(),
      newItem:'',
      childWords:''
    }
  },
  components :{
    //必须注册组件才能使用
    ComponentA
  },
  watch: {
    items : {
      handler: function (items) {
          Store.save(items)
      },
      //深度监听
      deep: true
    }

  },
  methods: {
     toggleFinish: function(item) {
        item.isFinished = !item.isFinished
      },
      addNew: function () {
        this.items.push ({
          label: this.newItem,
          isFinished: false
        })
        this.newItem = ''
      },
      //
      listenToMyBoy: function(msg) {
        this.childWords = msg
      }
  }
}
</script>
  
<style>
  .finished {
    color:blue
  }
</style>

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%
}
