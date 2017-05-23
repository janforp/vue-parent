<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{msgfromfather}}</h1>
    <button v-on:click="onClickMe">open mouth !</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'hello from 组件A',
    }
  },
  //表示子组件可以从父组件接收该消息,不注册则不接收
  props: ['msgfromfather'],
  methods: {
    onClickMe: function () {
        console.log(this.msgfromfather)
        this.$emit('child-tell-me-something', this.msg)
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
